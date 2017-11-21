import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MemberprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memberprofile',
  templateUrl: 'memberprofile.html',
})
export class MemberprofilePage {
  projects: any;
  users: {}[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase,private fireAuth: AngularFireAuth) {
    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;
     console.log(this.users);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberprofilePage');
  }

}
