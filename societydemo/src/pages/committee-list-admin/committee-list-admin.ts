import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommitteeProfileAdminPage } from '../committee-profile-admin/committee-profile-admin';

/**
 * Generated class for the CommitteeListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-list-admin',
  templateUrl: 'committee-list-admin.html',
})
export class CommitteeListAdminPage {
  public users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeListAdminPage');
    this.users = [
      {name: 'Sanket Patil', role: 'test1',icon:'assets/plumber.jpg',flat:'1'},
      {name: 'Shivani Mali', role: 'Secretary',icon:'assets/plumber.jpg',flat:'2'},
      {name: 'Mayuri parmar', role: 'Treasury',icon:'assets/plumber.jpg',flat:'3'},
      {name: 'Sachin ', role: 'Chairman',icon:'assets/plumber.jpg',flat:'4'}
    ];
  }
  memberprofile(){
    this.navCtrl.push(CommitteeProfileAdminPage);
  }
  viewItem(){
    this.navCtrl.push(CommitteeProfileAdminPage);
  }
}
