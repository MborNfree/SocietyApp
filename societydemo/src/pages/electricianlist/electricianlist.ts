import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ElectricianlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-electricianlist',
  templateUrl: 'electricianlist.html',
})
export class ElectricianlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricianlistPage');
  }


memberprofile()
{
  this.navCtrl.push(MemberprofilePage);
}


}
