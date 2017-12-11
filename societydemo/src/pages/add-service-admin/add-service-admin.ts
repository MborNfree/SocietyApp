import { ServiceListAdminPage } from "./../service-list-admin/service-list-admin";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from "angularfire2/database";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: "page-add-service-admin",
  templateUrl: "add-service-admin.html"
})
export class AddServiceAdminPage {
  authForm: FormGroup;
  services: AngularFireList<any>;

  @ViewChild("personName") personName;
  @ViewChild("servType") servType;
  @ViewChild("aboutServ") aboutServ;
  @ViewChild("servContact") servContact;

  public items: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase
    .database()
    .ref("/service_category/");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public fdb: AngularFireDatabase,
    public fire: AngularFireAuth
  ) {
    this.services = fdb.list("/services");

    this.authForm = formBuilder.group({
      servicenm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      serviceType: ["", Validators.compose([Validators.required])],
      aboutservice: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      serviceCnt: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(8),
          Validators.maxLength(10)
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddServiceAdminPage");

    // alert(this.itemRef);
    this.itemRef.on("value", itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
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

  addService(personName, servType, aboutServ, servContact) {
    alert(this.personName.value);
    alert(this.servType.value);
    alert(this.aboutServ.value);
    alert(this.servContact.value);

    this.fdb
      .list("/services/")
      .push({
        Service_name: this.personName.value,
        Service_type: this.servType.value,
        Description: this.aboutServ.value,
        Contact_no: this.servContact.value
      })
      .then(
        data => {
          console.log("got data ", data);
          this.alert("Service Added Successfully!");
          this.navCtrl.push(ServiceListAdminPage);
        },
        error => {
          console.log("got an error ", error);
          this.alert(error.message);
        }
      );
  }
}
