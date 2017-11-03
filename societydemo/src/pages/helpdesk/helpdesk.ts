import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform , ActionSheetController , ToastController , LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the HelpdeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-helpdesk',
  templateUrl: 'helpdesk.html',
})
export class HelpdeskPage {

  Instructions:string="OpenIssues";

  constructor(public navCtrl: NavController, public navParams: NavParams,public Platform:Platform, private camera: Camera, private transfer: Transfer, private file:File, private filePath:FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform:Platform, public loadingCtrl:LoadingController   ) {



    this.account.Instructions="OpenIssues";
    //  this.isAndroid = Platform.is('android');
  }


  account: { Instructions: string} = {
    Instructions:'',

  };



  public presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load From Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

public takePicture(sourceType){
  //Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };

  //get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    //special handling for android library
    if(this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
      .then(filePath => {
        let correctPath = filePath.substr(0,filePath.lastIndexOf('/') + 1);
        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      });
    }
    else{
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

//create a new name for the image
private createFileName(){
  var d = new Date(),
  n = d.getTime(),
  newFileName = n + ".jpg";
  return newFileName;
}

//copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName){
  this.file.copyFile(namePath,currentName,cordova.file.dataDirectory,newFileName).then(success => {
    //this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while saving file.');
  });
}

private presentToast(text){
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

//always get the accurate path to your apps folder
public pathForImage(img){
  if(img === null){
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

// public uploadImage(){
//   //Destination url
//   var url = "http://yoururl/upload/php";

//   //file for upload
//   var targetPath = this.pathForImage(this.lastImage);

//   //file name only
//   var filename = this.lastImage;

//   var options = {
//     fileKey: 'file',
//     fileName: filename,
//     chunkedMode: false,
//     mimeType: "multipart/form-data",
//     params: {'fileName': filename}
//   };

//   const fileTransfer: TransferObject = this.transfer.create();
//   this.loading = this.loadingCtrl.create({
//     content: 'Uploding...',
//   });
//   this.loading.present();

//   //use the FileTransfer to upload the image
//   fileTransfer.upload(targetPath, url, options).then(data => {
//     this.loading.dismissAll()
//     this.presentToast('Image uploaded successfully.');
//   }, err => {
//     this.loading.dismissAll()
//     this.presentToast('Error while uploading file.');
//   });
// }

  myInput:any;
  public items=[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpdeskPage');
    this.items = [
      {ques1: 'I forgot my password?'},
      {ques1: 'Illegal charges from Tenants of a CHS'},
      {ques1: 'Parking Issue between two reserved car parking'},
      {ques1: 'Extra maintenance on rented flat'},
      {ques1: 'Noise pollution in co-operative housing society'}
    ];
  }

}
