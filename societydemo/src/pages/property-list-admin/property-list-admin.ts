import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ModalController } from "ionic-angular";

import { AddAssetsAdminPage } from "./../add-assets-admin/add-assets-admin";


@IonicPage()
@Component({
  selector: "page-property-list-admin",
  templateUrl: "property-list-admin.html"
})
export class PropertyListAdminPage {
  public items = [];
  public assets = [];
  userName: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PropertyListAdminPage");
    this.items = [{ title: "Society Office", description: "test3" }];

    this.assets = [
      { title: "CCTV", description: "test1" },
      { title: "Sofa", description: "test2" },
      { title: "Society Office", description: "test3" }
    ];
  }

  AddAssets() {
    this.navCtrl.push(AddAssetsAdminPage);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  // AddProperty() {
  //   // let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
  //   // let myModal = this.modalCtrl.create(SampleModalPage, obj);
  //   // myModal.present();
  //   let myModal = this.modalCtrl.create(SampleModalPage);

  //     myModal.onDidDismiss(data => {
  //       this.userName = data.userName;
  //     });

  //     myModal.present();
  // }
}
