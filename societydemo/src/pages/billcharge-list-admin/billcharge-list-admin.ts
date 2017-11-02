import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillchargeListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billcharge-list-admin',
  templateUrl: 'billcharge-list-admin.html',
})
export class BillchargeListAdminPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillchargeListAdminPage');
    this.items = [
      {title: 'sinking', amount: '1000',type:'fixed'},
      {title: 'Repaire fund', amount: '1300',type:'percentage'},
      {title: 'Security charges', amount: '400',type:'fixed'},
      {title: 'Municipal due', amount: '300',type:'percentage'}
    ];
  }

}
