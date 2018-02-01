import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { ServiceDetailPage } from '../service-detail/service-detail';
import * as firebase from 'firebase';

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
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlumberlistPage");
    firebase.database().ref("services").orderByChild("Service_type").equalTo('Plumber').once("value", (snapshot) => {
      console.log(snapshot.key);
      console.log(snapshot.val());
      this.items.push(snapshot.val());
      console.log('item' + JSON.stringify(this.items));
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
    this.navCtrl.push(ServiceDetailPage, {
      item: item
    });
  }
}
