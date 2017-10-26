import { BillingchargesPage } from './../billingcharges/billingcharges';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-bill',
  templateUrl: 'select-bill.html',
})
export class SelectBillPage {

   modeofpayment: { mptm: string; }[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.modeofpayment = [
      {mptm:'NEFT'},
      {mptm:'Credit'},
      {mptm:'Debit'},
    ]

  }


   account:{modeofpay:string , payamount:string,charges:string}=
  {
    modeofpay:'',
    payamount:'',
    charges:'',
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBillPage');
  }

 
viewbill()
{
this.navCtrl.push(BillingchargesPage);
}

}
