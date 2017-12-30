import { RuleListAdminPage } from "./../rule-list-admin/rule-list-admin";
import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";


@IonicPage()
@Component({
  selector: "page-add-norms",
  templateUrl: "add-norms.html"
})
export class AddNormsPage {
  authForm: FormGroup;
  rulenm: string;
  ruletype: string;

  @ViewChild("rule") rule;
  @ViewChild("rType") rType;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public fdb: AngularFireDatabase
  ) {
    this.authForm = formBuilder.group({
      rulenm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      ],
      ruletype: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*")
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddNormsPage");
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
    this.fdb
      .list("/society_rules/")
      .push({ rule: this.rule.value, rule_type: this.rType.value })
      .then(
        data => {
          console.log("got data ", data);
          this.alert("Service Added Successfully!");
          this.navCtrl.push(RuleListAdminPage);
        },
        error => {
          console.log("got an error ", error);
          this.alert(error.message);
        }
      );
  }
}
