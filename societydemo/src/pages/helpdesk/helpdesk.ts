import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ActionSheetController,
  ToastController,
  LoadingController,
  Loading
} from "ionic-angular";

import { File } from "@ionic-native/file";
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from "@ionic-native/file-path";
import { Camera } from "@ionic-native/camera";
import firebase from 'firebase';

declare var cordova: any;

@IonicPage()
@Component({
  selector: "page-helpdesk",
  templateUrl: "helpdesk.html"
})
export class HelpdeskPage {
  Instructions: string = "OpenIssues";

  public myPhotosRef: any;
  public myPhoto: any;
public myPhotoURL: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Platform: Platform,
    private camera: Camera,
    public cameraPlugin: Camera,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController
  ) {
    this.myPhotosRef = firebase.storage().ref('/Photos_gallary/');
    this.account.Instructions = "OpenIssues";
    //  this.isAndroid = Platform.is('android');
  }

  account: { Instructions: string } = {
    Instructions: ""
  };

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Select Image Source",
      buttons: [
        {
          text: "Load From Library",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            this.cameraPlugin.getPicture({
              quality: 100,
              destinationType: this.cameraPlugin.DestinationType.DATA_URL,
             sourceType:this.cameraPlugin.PictureSourceType.PHOTOLIBRARY,
              encodingType: this.cameraPlugin.EncodingType.PNG,
            }).then(imageData => {
              // Send the picture to Firebase Storage
              const selfieRef = firebase.storage().ref('profilePictures/user1/'+Image);
              selfieRef
                .putString(imageData, 'base64', {contentType: 'image/png'})
                .then(savedProfilePicture => {
                  firebase
                    .database()
                    .ref(`users/user1/profilePicture`)
                    .push(savedProfilePicture.downloadURL);
                });
            }, error => {
              console.log("ERROR -> " + JSON.stringify(error));
          }
          )}
        },
        {
          text: "Use Camera",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
            this.cameraPlugin.getPicture({
              quality : 95,
              destinationType : this.cameraPlugin.DestinationType.DATA_URL,
              sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
              allowEdit : true,
              encodingType: this.cameraPlugin.EncodingType.PNG,
              targetWidth: 500,
              targetHeight: 500,
              saveToPhotoAlbum: true
            }).then(profilePicture => {
            // Send the picture to Firebase Storage
            const selfieRef = firebase.storage().ref('profilePictures/user1/'+Image);
            selfieRef
              .putString(profilePicture, 'base64', {contentType: 'image/png'})
              .then(savedProfilePicture => {
                firebase
                  .database()
                  .ref(`users/user1/profilePicture`)
                  .push(savedProfilePicture.downloadURL);
              });
          },
             error => {
              // Log an error to the console if something goes wrong.
              console.log("ERROR -> " + JSON.stringify(error));
            });
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    //Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    //get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        //special handling for android library
        if (
          this.platform.is("android") &&
          sourceType === this.camera.PictureSourceType.PHOTOLIBRARY
        ) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
            let currentName = imagePath.substring(
              imagePath.lastIndexOf("/") + 1,
              imagePath.lastIndexOf("?")
            );
            this.copyFileToLocalDir(
              correctPath,
              currentName,
              this.createFileName()
            );
          });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf("/") + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf("/") + 1);
          this.copyFileToLocalDir(
            correctPath,
            currentName,
            this.createFileName()
          );
        }
      },
      err => {
        this.presentToast("Error while selecting image.");
      }
    );
  }


  // private uploadPhoto(): void {
  //   this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
  //   // // const selfieRef = firebase.storage().ref('profilePictures/user1/'+Image);
  //   // selfieRef
  //     .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
  //     .then((savedPicture) => {
  //       this.myPhotoURL = savedPicture.downloadURL;
  //     });
  // }


  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  //create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  //copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file
      .copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName)
      .then(
        success => {
          //this.lastImage = newFileName;
        },
        error => {
          this.presentToast("Error while saving file.");
        }
      );
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  //always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return "";
    } else {
      return cordova.file.dataDirectory + img;
    }
  }


  myInput: any;
  public items = [];

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelpdeskPage");
    this.items = [
      { ques1: "I forgot my password?" },
      { ques1: "Illegal charges from Tenants of a CHS" },
      { ques1: "Parking Issue between two reserved car parking" },
      { ques1: "Extra maintenance on rented flat" },
      { ques1: "Noise pollution in co-operative housing society" }
    ];
  }
}
