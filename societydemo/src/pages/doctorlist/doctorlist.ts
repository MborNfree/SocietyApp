import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the DoctorlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctorlist',
  templateUrl: 'doctorlist.html',
})
export class DoctorlistPage {


  services=[];
   arrData = [];
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
this.fdb.list("/services/").valueChanges().subscribe(_data => {
      this.items = _data;
     console.log(this.items);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorlistPage');
    // this.items=[
    //   {name: 'Akshay', phoneno: '9874587896'},
    //   {name: 'Sanket Patil', phoneno: '8521478965'},
    //   {name: 'Shivani Mali', phoneno: '9645875412'},
    //   {name: 'Mayuri parmar', phoneno: '7854879454'},
    //   {name: 'Pooja ', phoneno: '7854125632'  },
    //   {name: 'Sania Mirza', phoneno: '9654787784'},
    // ];
  }

viewItem(item){
      this.navCtrl.push(MemberprofilePage, {
        item: item
      });
    }

}
