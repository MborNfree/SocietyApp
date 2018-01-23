import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor() {
  }

  openUrl(url) {
   // let browser = new InAppBrowser(url, '_blank', 'location=yes');
  }
}
