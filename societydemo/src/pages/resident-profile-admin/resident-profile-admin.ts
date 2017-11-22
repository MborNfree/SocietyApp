import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
// import { ActivatedRoute } from '@angular/router';
// import { AngularFireListObservable } from 'angularfire2';

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
  // book: AngularFireListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;
     console.log(this.users);
    });

    // route.params.forEach(params => {
    //   this.book = fdb.object(params['email']);
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentProfileAdminPage');
  }

}
