
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { ServiceDetailPage } from '../service-detail/service-detail';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: "page-doctorlist",
  templateUrl: "doctorlist.html"
})
export class DoctorlistPage {
  services = [];
  arrData = [];
  public users = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DoctorlistPage");
    firebase.database().ref("services").orderByChild("Service_type").equalTo('Doctor').once("value", (snapshot) => {
      // console.log(snapshot.key);
      //console.log(snapshot.val());

      this.users.push(JSON.stringify(snapshot.val()));
      console.log('item' + this.users);
      console.log('test' + this.users['Contact_no']);
    });
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(user) {
    this.navCtrl.push(ServiceDetailPage, {
      item: user
    });
  }
}
