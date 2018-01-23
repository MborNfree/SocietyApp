import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {
  imgsource: any;

  images = [
    "holi.jpg",
    "independence day.png",
    "Party-Poppers-icon.png",
    "diwali.jpg"
  ]; 


  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
  }


  display() {

    firebase.storage().ref().child('upload/${filename}').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }

}
