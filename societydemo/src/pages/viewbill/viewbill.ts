import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewbillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewbill',
  templateUrl: 'viewbill.html',
})
export class ViewbillPage {

  public srNo = [];
  public particulars = [];
  public particularAmt = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewbillPage');
    this.srNo = [
      {no: '1'},
      {no: '2'},
      {no: '3'}
    ];

    this.particulars = [
      {particular: 'Particular 1'},
      {particular: 'Particular 2'},
      {particular: 'Particular 3'}
    ];

    this.particularAmt = [
      {amount: '100'},
      {amount: '500'},
      {amount: '1000'}
    ];
  }

}
