import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-flatwise-service-list-admin",
  templateUrl: "flatwise-service-list-admin.html"
})
export class FlatwiseServiceListAdminPage {
  public items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/flatwiseservice/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FlatwiseServiceListAdminPage");
  }
  deleteFlatService(Id) {
    alert("deleted");
  }
  EditFlatService() {
    alert("edited");
  }
}
