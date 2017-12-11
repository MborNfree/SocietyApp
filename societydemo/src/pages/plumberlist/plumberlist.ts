<<<<<<< HEAD
import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the PlumberlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { MemberprofilePage } from "./../memberprofile/memberprofile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027

@IonicPage()
@Component({
  selector: "page-plumberlist",
  templateUrl: "plumberlist.html"
})
export class PlumberlistPage {
  services = [];
  arrData = [];
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/services/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlumberlistPage");

  }

  viewItem(item) {
    this.navCtrl.push(MemberprofilePage, {
      item: item
    });
  }
}
