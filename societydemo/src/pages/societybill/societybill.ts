import { BillingchargesPage } from './../billingcharges/billingcharges';
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


gotobilling()
{
  this.navCtrl.push(BillingchargesPage);
}



  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietybillPage');

      this.items=
      [
          { description1: 'SEPT 2017-OCT 2017'},
          { description1: 'AUG 2017-Sept 2017'},
          { description1: 'JULY 2017-AUG 2017'},
          { description1: 'JUN 2017-JULY 2017'},
          { description1: 'MAY 2017-JUN 2017'},
          { description1: 'APR 2017-MAY 2017'},
          { description1: 'MAR 2017-APR 2017'},
          { description1: 'FEB 2017-MAR 2017'},
          { description1: 'JAN 2017-FEB 2017'},
           
      ];





  }


  viewItem(item){
      this.navCtrl.push(BillingchargesPage, {
        item: item
      });
    }


}
