import { PropertyListAdminPage } from './../property-list-admin/property-list-admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {
  email: string = this.navParams.get('email');
  Propertynm:string;
  userProvidedData:object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }
  // closeModal() {
  //   this.viewCtrl.dismiss();
  // }
  onSubmit(){
    this.navCtrl.push(PropertyListAdminPage);
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
