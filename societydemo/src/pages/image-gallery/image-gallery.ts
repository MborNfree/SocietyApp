import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html"
})
export class ImageGalleryPage {
  images = [
    "holi.jpg",
    "independence day.png",
    "Party-Poppers-icon.png",
    "diwali.jpg"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
