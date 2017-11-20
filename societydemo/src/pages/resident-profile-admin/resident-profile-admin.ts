import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ResidentProfileAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resident-profile-admin',
  templateUrl: 'resident-profile-admin.html',
})
export class ResidentProfileAdminPage {
  users: {}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;
     console.log(this.users);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentProfileAdminPage');
  }

}
