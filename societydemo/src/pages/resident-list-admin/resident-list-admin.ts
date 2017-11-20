import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResidentProfileAdminPage } from '../resident-profile-admin/resident-profile-admin';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-resident-list-admin',
  templateUrl: 'resident-list-admin.html',
})
export class ResidentListAdminPage {
  public users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
 this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;     
     console.log(this.users);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentListAdminPage');
    // this.users = [
    //   {name: 'Sanket Patil', icon:'assets/plumber.jpg',flat:'1'},
    //   {name: 'Shivani Mali', icon:'assets/plumber.jpg',flat:'2'},
    //   {name: 'Mayuri parmar', icon:'assets/plumber.jpg',flat:'3'},
    //   {name: 'Sachin ', icon:'assets/plumber.jpg',flat:'4'}
    // ];
  }
 
  viewItem(){
    this.navCtrl.push(ResidentProfileAdminPage);
  }
}
