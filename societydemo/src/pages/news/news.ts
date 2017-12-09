import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {


    const browser = this.iab.create('http://www.dnaindia.com/','_self','location=yes');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
