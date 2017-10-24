import { BillingchargesPage } from './../billingcharges/billingcharges';
import { SelectBillPage } from './../select-bill/select-bill';
import { PlumberlistPage } from './../plumberlist/plumberlist';
import { CommitteelistPage } from './../committeelist/committeelist';
import { EventlistPage } from './../eventlist/eventlist';
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


  tab1Root = SelectBillPage;
  tab2Root = BillingchargesPage;
  tab3Root = PlumberlistPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietybillPage');
  }

}
