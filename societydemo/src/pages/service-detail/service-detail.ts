import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";


@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {
  itemsParam: any;
  users: {}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private fdb: AngularFireDatabase, ) {
    this.fdb
      .list("/services/")
      .valueChanges()
      .subscribe(_data => {
        this.users = _data;
        //console.log(this.users);
      });
    this.itemsParam = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceDetailPage');
  }

  sendSms(cnt: number) {
    // alert(cnt);
    var data = cnt;
    // var data ={ message: "hello world", contact: cnt };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", { data: data });
    modalPage.present();
  }

}
