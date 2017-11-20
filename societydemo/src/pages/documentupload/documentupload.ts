import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform , ActionSheetController , ToastController , LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the DocumentuploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;


@IonicPage()
@Component({
  selector: 'page-documentupload',
  templateUrl: 'documentupload.html',
})
export class DocumentuploadPage {

  public items=[];
  public Circular = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              public Platform:Platform,
              private camera: Camera,
              private transfer: Transfer,
              private file:File,
              private filePath:FilePath,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public platform:Platform,
              public loadingCtrl:LoadingController,
              private fdb: AngularFireDatabase) {

                this.items = [
                    {title: 'document1'},
                    {title: 'document2'},
                    {title: 'document3'},
                    {title: 'document4'},
                    {title: 'document5'},
                    {title: 'document6'}
                ];


                this.fdb.list("/documents/").valueChanges().subscribe(_data => {
                  this.Circular = _data;
                 console.log(this.Circular);
                });
  }

  removeItem(item){
    var i;
    for(i = 0; i < this.items.length; i++){
      if(this.items[i] == item){
        this.items.splice(i,1);
      }
    }
  }

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentuploadPage');
  }

}
