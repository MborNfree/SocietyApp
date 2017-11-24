import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ResidentlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-residentlist',
  templateUrl: 'residentlist.html',
})
export class ResidentlistPage {


  public users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
this.fdb.list("/users/").valueChanges().subscribe(_data => {
      this.users = _data;
     console.log(this.users);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentlistPage');
    //  this.items=[
    //   {name: 'Akshay', phoneno: '9874587896'},
    //   {name: 'Sanket Patil', phoneno: '8521478965'},
    //   {name: 'Shivani Mali', phoneno: '9645875412'},
    //   {name: 'Mayuri parmar', phoneno: '7854879454'},
    //   {name: 'Pooja ', phoneno: '7854125632'},
    //   {name: 'Sania Mirza', phoneno: '9654787784'},
    // ];
  }

  viewItem(user){
  //alert(item);
      this.navCtrl.push(MemberprofilePage, {
        item: user
      });
    }

}
