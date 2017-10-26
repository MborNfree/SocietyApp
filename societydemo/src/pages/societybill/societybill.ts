import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocietybillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-societybill',
  templateUrl: 'societybill.html',
})
export class SocietybillPage {

<<<<<<< HEAD
=======

>>>>>>> bae53240fd80e1c17bba7fbe4a998239208e017f
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietybillPage');
  }

viewbill()
{
this.navCtrl.push(BillingchargesPage);
}

}
