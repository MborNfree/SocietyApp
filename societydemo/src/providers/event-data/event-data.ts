import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
// import firebase from "firebase"
import * as firebase from "firebase/app";;

@Injectable()
export class EventDataProvider {
  sbaList: any;

  constructor(public http: Http) {
    this.sbaList = firebase.database().ref("/documents");
    console.log("Hello EventDataProvider Provider");
  }

  makeFileIntoBlob(_imagePath, name, type) {
    //alert("name" + name);
   // alert("_imagePath" + _imagePath);
  //  alert("type" + type);
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {


    });
  }

  getfilename(filestring) {
    let file;
    file = filestring.replace(/^.*[\\\/]/, "");
    return file;
  }

  getfileext(filestring) {
    let file = filestring.substr(filestring.lastIndexOf(".") + 1);
    return file;
  }
  getRequestFiles(sbaid): any {
    return this.sbaList.child("sbafiles");
  }

  addAssignmentFile(sbaid, file: any): any {
    return (
      this.sbaList
        .child(file.filename)
        //Saves the file to storage
        .put(file.blob, { contentType: file.type })
        .then(savedFile => {
         // alert('save'+savedFile);
          //Gets the file url and saves it in the database
          this.sbaList.child("sbafiles").push({
            file: savedFile.downloadURL,
            name: file.filename,
            ext: file.fileext,
            type: file.type
          });
        })
    );
  }
}
