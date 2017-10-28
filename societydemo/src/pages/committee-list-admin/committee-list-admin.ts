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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeListAdminPage');
  }
  memberprofile(){
    this.navCtrl.push(CommitteeProfileAdminPage);
  }
}
