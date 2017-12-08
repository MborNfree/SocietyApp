import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {

  images = ['holi.jpg', 'independence day.png', 'Party-Poppers-icon.png', 'diwali.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ImageGalleryPage');
  // }


}
