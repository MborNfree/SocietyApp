import { Component, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommitteeProfileAdminPage } from '../committee-profile-admin/committee-profile-admin';
import { AngularFireDatabase } from 'angularfire2/database';
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

  key;

  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

    this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.items = _data;
     console.log(this.items);
    });

    this.key = '0';
    this.fdb.object(`users/${this.key}`).valueChanges().subscribe((result) => console.log('com'+result));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeListAdminPage');
    // this.users = [
    //   {name: 'Sanket Patil', role: 'test1',icon:'assets/plumber.jpg',flat:'1'},
    //   {name: 'Shivani Mali', role: 'Secretary',icon:'assets/plumber.jpg',flat:'2'},
    //   {name: 'Mayuri parmar', role: 'Treasury',icon:'assets/plumber.jpg',flat:'3'},
    //   {name: 'Sachin ', role: 'Chairman',icon:'assets/plumber.jpg',flat:'4'}
    // ];
  }
  memberprofile(){
    this.navCtrl.push(CommitteeProfileAdminPage);
  }
  viewItem(item){
    this.navCtrl.push(CommitteeProfileAdminPage, {
      item: item
    });
  }
}
