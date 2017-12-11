import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PropertyListAdminPage } from "../property-list-admin/property-list-admin";

@IonicPage()
@Component({
  selector: "page-add-assets-admin",
  templateUrl: "add-assets-admin.html"
})
export class AddAssetsAdminPage {
  authForm: FormGroup;
  Propertynm: string;
  type: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      Propertynm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      type: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*")
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddAssetsAdminPage");
  }
  onSubmit(value: any): void {
    alert("added");
    this.navCtrl.push(PropertyListAdminPage);
  }
}
