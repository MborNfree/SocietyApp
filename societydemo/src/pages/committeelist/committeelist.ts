import { MemberprofilePage } from "./../memberprofile/memberprofile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: "page-committeelist",
  templateUrl: "committeelist.html"
})
export class CommitteelistPage {
  public Committeeitems = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    // this.fdb.list("/users/").valueChanges().subscribe(_data => {
    //   this.Committeeitems = _data;
    //  console.log(this.Committeeitems);
    // });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteelistPage");
    var ref = firebase.database().ref("users");
    ref.orderByChild("role").equalTo('Committee Member').once("value", (items: any) => {
      console.log(items.key);
      console.log(items.val());

      let users: any = [];

      items.forEach((item) => {
        users.push({
          key: item.key,
          flatno: item.val().flatno,
          first_name: item.val().first_name,
          contact_no: item.val().contact_no,
          role: item.val().role,
        });
      });
      this.Committeeitems = users;
      console.log("Committe Data: ", this.Committeeitems);
    });
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(MemberprofilePage, {
      item: item
    });
  }
}
