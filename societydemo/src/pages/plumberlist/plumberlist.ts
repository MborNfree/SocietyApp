import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlumberlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumberlist',
  templateUrl: 'plumberlist.html',
})
export class PlumberlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumberlistPage');
  }

memberprofile()
{
  this.navCtrl.push(MemberprofilePage);

}
}
