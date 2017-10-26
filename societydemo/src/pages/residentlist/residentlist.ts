import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResidentlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residentlist',
  templateUrl: 'residentlist.html',
})
export class ResidentlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentlistPage');
  }

memberprofile()
{
  this.navCtrl.push(MemberprofilePage);

}

}
