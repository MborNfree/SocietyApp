<<<<<<< HEAD
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommitteeProfileAdminPage } from '../committee-profile-admin/committee-profile-admin';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CommitteeListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommitteeProfileAdminPage } from "../committee-profile-admin/committee-profile-admin";
import { AngularFireDatabase } from "angularfire2/database";
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027

@IonicPage()
@Component({
  selector: "page-committee-list-admin",
  templateUrl: "committee-list-admin.html"
})
export class CommitteeListAdminPage {
  key;
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteeListAdminPage");
  }

  viewItem(item) {
    this.navCtrl.push(CommitteeProfileAdminPage, {
      item: item
    });
  }
}
