import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ElectricianlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-electricianlist',
  templateUrl: 'electricianlist.html',
})
export class ElectricianlistPage {

   public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.fdb.list("/services/").valueChanges().subscribe(_data => {
      this.items = _data;
     console.log(this.items);
    });
    



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricianlistPage');
    //  this.items=[
    //   {name: 'Akshay', phoneno: '9874587896'},
    //   {name: 'Sanket Patil', phoneno: '8521478965'},
    //   {name: 'Shivani Mali', phoneno: '9645875412'},
    //   {name: 'Mayuri Parmar', phoneno: '7854879454'},
    //   {name: 'Saniya Patel', phoneno: '8547125487'},
    //   {name: 'Rohit Sharma', phoneno: '7854125412'},
    // ];
    } 


viewItem(item){
      this.navCtrl.push(MemberprofilePage, {
        item: item
      });
    }

}
