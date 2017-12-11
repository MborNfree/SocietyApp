import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import firebase from "firebase";

@Injectable()
export class EventDataProvider {
  sbaList: any;

  constructor(public http: Http) {
    this.sbaList = firebase.database().ref("/documents");
    console.log("Hello EventDataProvider Provider");
  }

  makeFileIntoBlob(_imagePath, name, type) {
    alert("name" + name);
    alert("_imagePath" + _imagePath);
    alert("type" + type);
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      // window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {
      //     fileEntry.file((resFile) => {
      //       var reader = new FileReader();
      //       reader.onloadend = (evt: any) => {
      //         var imgBlob: any = new Blob([evt.target.result], { type: type });
      //         imgBlob.name = name;
      //         resolve(imgBlob);
      //       };
      //       reader.onerror = (e) => {
      //        alert('Failed file read: ' + e.toString());
      //         reject(e);
      //       };
      //       reader.readAsArrayBuffer(resFile);
      //     });
      //  });
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
