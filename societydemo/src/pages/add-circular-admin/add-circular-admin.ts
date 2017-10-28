import { CircularListAdminPage } from './../circular-list-admin/circular-list-admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCircularAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-circular-admin',
  templateUrl: 'add-circular-admin.html',
})
export class AddCircularAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCircularAdminPage');
  }
  AddCircular(){
    this.navCtrl.push(CircularListAdminPage);
  }
}
