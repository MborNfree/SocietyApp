import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
// import * as firebase from 'firebase';


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
    // var ref = firebase.database().ref("users");
    // ref.orderByChild("role").equalTo('null').once("value", (items : any)=> {
    //   console.log(items.key);
    //   console.log(items.val());

    //   let users : any = [];

    //   items.forEach((item) =>
    //   {
    //     users.push({
    //       key          : item.key,
    //       flatno       : item.val().flatno,
    //       first_name   : item.val().first_name,
    //       contact_no   : item.val().contact_no,
    //       role         :item.val().role,
    //     });
    //   });
    //   this.users = users;
    //   console.log("Committe Data: ",this.users);
    // });

  }

  viewItem(user){
  //alert(item);
      this.navCtrl.push(MemberprofilePage, {
        item: user
      });
    }

}
