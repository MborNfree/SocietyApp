import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiceListAdminPage } from "../service-list-admin/service-list-admin";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-add-service-category-admin",
  templateUrl: "add-service-category-admin.html"
})
export class AddServiceCategoryAdminPage {
  serviceCategories: AngularFireList<any>;
  authForm: FormGroup;
  ServiceCatnm: string;

  @ViewChild("serviceCategory") serviceCategory;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public fdb: AngularFireDatabase,
    public fire: AngularFireAuth
  ) {
    this.serviceCategories = fdb.list("/service_category");
    this.authForm = formBuilder.group({
      ServiceCatnm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z\ \]*"),
          Validators.minLength(2),
          Validators.maxLength(20)
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddServiceCategoryAdminPage");
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

  addServiceCategory(serviceCategory) {
    alert(this.serviceCategory.value);

    this.fdb
      .list("/service_category/")
      .push({ service_category: this.serviceCategory.value })
      .then(
        data => {
          console.log("got data ", data);
         // this.alert("Service Category Added Successfully!");
          this.navCtrl.push(ServiceListAdminPage);
        },
        error => {
          console.log("got an error ", error);
          this.alert(error.message);
        }
      );
  }


}
