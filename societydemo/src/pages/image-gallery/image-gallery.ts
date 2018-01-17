import { Component,NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PhotosPage } from "../photos/photos";
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html"
})
export class ImageGalleryPage {
  imgsource: any;
  items = [
    // {title:"Nature"},
    // {title:"Holi"},
    // {title:"Nature"},
    // {title:"Nature"}
    // "holi.jpg",
    // "independence day.png",
    // "Party-Poppers-icon.png",
    // "diwali.jpg"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone: NgZone) {}

  gotogallery(){
  this.navCtrl.push(PhotosPage);
  }

  display() {
    firebase.storage().ref().child('upload/banner.jpg').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }

}
