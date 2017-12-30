import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ActionSheetController,
  ToastController,
  LoadingController
} from "ionic-angular";

import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { FileChooser } from "@ionic-native/file-chooser";

import { Camera, CameraOptions } from "@ionic-native/camera";
import { AngularFireDatabase } from "angularfire2/database";
import { BehaviorSubject } from "rxjs";
// import * as firebase from 'firebase';
import { EventDataProvider } from "../../providers/event-data/event-data";

declare var cordova: any;

@IonicPage()
@Component({
  selector: "page-documentupload",
  templateUrl: "documentupload.html"
})
export class DocumentuploadPage {
  sbaid: any;

  public items = [];
  public Circular = [];

  filesnum: any;
  files: any;

  // For Login
  public userEmail: string;
  public userPassword: string;

  public authStatus: boolean;
  public message: string;
  picturesArray: any;
  public todoArray: any;
  private isAuth: BehaviorSubject<boolean>;
  imageURI: any;
  imageFileName: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Platform: Platform,
    private camera: Camera,
    // private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    public FileChooser: FileChooser,
    public eventsdata: EventDataProvider,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    private fdb: AngularFireDatabase
  ) {
    this.items = [
      { title: "document1" },
      { title: "document2" },
      { title: "document3" },
      { title: "document4" },
      { title: "document5" },
      { title: "document6" }
    ];

    this.eventsdata.getRequestFiles(this.sbaid).on("value", snapshot => {
      let rawList = [];
      snapshot.forEach(snap => {
        rawList.unshift({
          id: snap.key,
          file: snap.val().file,
          name: snap.val().name,
          ext: snap.val().ext
        });
      });
      this.files = rawList;
      this.filesnum = rawList.length;
    });
    this.isAuth = new BehaviorSubject(false);

    this.isAuth.subscribe(val => (this.authStatus = val));
    console.log("auth" + this.isAuth);
    this.fdb
      .list("/documents/")
      .valueChanges()
      .subscribe(_data => {
        this.Circular = _data;
        console.log(this.Circular);
      });
  }

  selectFile() {
    let file;
    this.FileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(fileentry => {
        let filename = this.eventsdata.getfilename(fileentry);
        let fileext = this.eventsdata.getfileext(fileentry);
        //alert("ext" + fileext);
        if (fileext == "pdf") {
          this.eventsdata
            .makeFileIntoBlob(fileentry, fileext, "application/pdf")
            .then(fileblob => {
              file = {
                blob: fileblob,
                type: "application/pdf",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }
        if (fileext == "docx") {
          this.eventsdata
            .makeFileIntoBlob(
              fileentry,
              fileext,
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            )
            .then(fileblob => {
              file = {
                blob: fileblob,
                type:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }
        if (fileext == "doc") {
          this.eventsdata
            .makeFileIntoBlob(fileentry, fileext, "application/msword")
            .then(fileblob => {
              file = {
                blob: fileblob,
                type: "application/msword",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }
        if (fileext == "epub") {
          this.eventsdata
            .makeFileIntoBlob(fileentry, fileext, "application/octet-stream")
            .then(fileblob => {
              file = {
                blob: fileblob,
                type: "application/octet-stream",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }
        if (fileext == "accdb") {
          this.eventsdata
            .makeFileIntoBlob(fileentry, filename, "application/msaccess")
            .then(fileblob => {
              file = {
                blob: fileblob,
                type: "application/msaccess",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }
        if (fileext == "xlsx") {
          this.eventsdata
            .makeFileIntoBlob(
              fileentry,
              filename,
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            )
            .then(fileblob => {
              file = {
                blob: fileblob,
                type:
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                fileext: fileext,
                filename: filename
              };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
        }

        //      else if (fileext!="doc"||"epub"||"xlsx"||"pdf"||"accdb"||"docx" ){

        //alert("Can't add "+  filename)

        //      }
      });
    });
  }

  gotoFilePage(file) {
    cordova.InAppBrowser.open(file, "_system", "location=yes");
  }

  ngOnInit() {
    // Let's load our data here
    //this.loadData();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad DocumentuploadPage");
  }

  removeItem(item) {
    var i;
    for (i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        this.items.splice(i, 1);
      }
    }
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Select Image Source",
      buttons: [
        {
          text: "Load From Library",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: "Use Camera",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
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

  viewItem() {
    alert("view in progress");
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imageURI = imageData;
      },
      err => {
        console.log(err);
        this.presentToast(err);
      }
    );
  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    //  const fileTransfer: FileTransferObject = this.transfer.create();

    // let options: FileUploadOptions = {
    //   fileKey: 'ionicfile',
    //   fileName: 'ionicfile',
    //   chunkedMode: false,
    //   mimeType: "image/jpeg",
    //   headers: {}
    // }

    // fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    //   .then((data) => {
    //   console.log(data+" Uploaded Successfully");
    //   this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    //   loader.dismiss();
    //   this.presentToast("Image uploaded successfully");
    // }, (err) => {
    //   console.log(err);
    //   loader.dismiss();
    //   this.presentToast(err);
    // });
  }
}
