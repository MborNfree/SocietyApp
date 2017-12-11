import { BillListAdminPage } from "./../bill-list-admin/bill-list-admin";

import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import firebase from "firebase";

import { AddchargesAdminPage } from "./../addcharges-admin/addcharges-admin";
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the GenerateBillAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-generate-bill-admin",
  templateUrl: "generate-bill-admin.html"
})
export class GenerateBillAdminPage {
  BillUnm: string;
  public users = [];
  authForm: FormGroup;
  unm: string;
  flat: number;
  Utype: string;
  pan: number;
  park: number;
  total: number;
  charges1: number;
  charges2: number;
  charges3: number;

  public items: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase
    .database()
    .ref("/users/");

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public fdb: AngularFireDatabase
  ) {
    this.authForm = formBuilder.group({
      unm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      flat: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      Utype: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4)
        ])
      ],
      pan: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ],
      park: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ],
      total: ["", Validators.compose([Validators.required])],
      charges1: ["", Validators.compose([Validators.required])],
      charges2: ["", Validators.compose([Validators.required])],
      charges3: ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GenerateBillAdminPage");

    //alert(this.itemRef);
    this.itemRef.on("value", itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
      // alert(this.items);
    });
  }
  alert(message: string) {
    this.alertCtrl
      .create({
        title: "Info!",
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }
  onSubmit(value: any): void {
    this.BillUnm = JSON.stringify(value.unm);

    this.fdb
      .list("/billing/")
      .push({ bill_name: value.unm, total: value.total })
      .then(
        data => {
          console.log("got data ", data);
          this.alert("bill Added Successfully!");
          this.navCtrl.push(BillListAdminPage);
        },
        error => {
          console.log("got an error ", error);
          this.alert(error.message);
        }
      );
  }
  addcharges() {
    this.navCtrl.push(AddchargesAdminPage);
  }
}
