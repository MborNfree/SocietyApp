import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from "angularfire2/database";
import { CircularListAdminPage } from "./../circular-list-admin/circular-list-admin";

@IonicPage()
@Component({
  selector: "page-add-circular-admin",
  templateUrl: "add-circular-admin.html"
})
export class AddCircularAdminPage {
  users: AngularFireList<any>;
  authForm: FormGroup;
  Circularnm: string;
  cfile: string;

  @ViewChild("cirnm") circular_name;
  @ViewChild("cirpath") circular_path;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private fdb: AngularFireDatabase,
    private alertCtrl: AlertController
  ) {
    this.users = fdb.list("/documents");
    this.authForm = formBuilder.group({
      Circularnm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      cfile: ["", Validators.compose([Validators.required])]
    });
  }

  alert(message: string) {
    this.alertCtrl
      .create({
        title: "Add!",
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddCircularAdminPage");
  }

  onSubmit(value: any): void {
   // alert("nm" + this.circular_name.value);
    this.fdb.list("/documents/").push({
      doc_name: this.circular_name.value,
      path: this.circular_path.value
    });
    //this.alert("Circulars added Successfully");
    this.navCtrl.push(CircularListAdminPage);

  }
}
