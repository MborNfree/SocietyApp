import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: "page-dosdonts",
  templateUrl: "dosdonts.html"
})
export class DosdontsPage {
  public items_dos = [];
  public items_dont = [];
  Instructions: string = "DoS";
  //  isAndroid: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Platform: Platform,
    private fdb: AngularFireDatabase
  ) {
    // this.fdb
    //   .list("/society_rules/")
    //   .valueChanges()
    //   .subscribe(_data => {
    //     this.items = _data;
    //     console.log(this.items);
    //   });

    this.account.Instructions = "DoS";
    //  this.isAndroid = Platform.is('android');
  }

  account: { Instructions: string } = {
    Instructions: ""
  };

  ionViewDidLoad() {
    console.log("ionViewDidLoad DosdontsPage");
    firebase.database().ref("society_rules").orderByChild("rule_type").equalTo('Do\'s').once("value", (snapshot) => {
      console.log(snapshot.key);
      console.log(snapshot.val());

      this.items_dos.push(snapshot.val());
      console.log('item' + JSON.stringify(this.items_dos));
    });

    firebase.database().ref("society_rules").orderByChild("rule_type").equalTo('Don\'t').once("value", (snapshot) => {
      console.log(snapshot.key);
      console.log(snapshot.val());

      this.items_dont.push(snapshot.val());
      console.log('item' + JSON.stringify(this.items_dont));
    });
  }
}
