import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-dosdonts",
  templateUrl: "dosdonts.html"
})
export class DosdontsPage {
  public items = [];
  Instructions: string = "DoS";
  //  isAndroid: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Platform: Platform,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/society_rules/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });

    this.account.Instructions = "DoS";
    //  this.isAndroid = Platform.is('android');
  }

  account: { Instructions: string } = {
    Instructions: ""
  };

  ionViewDidLoad() {
    console.log("ionViewDidLoad DosdontsPage");
  }
}
