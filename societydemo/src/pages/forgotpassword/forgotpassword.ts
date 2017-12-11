import { RegisterPage } from "./../register/register";
import { LoginPage } from "./../login/login";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-forgotpassword",
  templateUrl: "forgotpassword.html"
})
export class ForgotpasswordPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForgotpasswordPage");
  }

  onSubmit() {
    this.navCtrl.push(LoginPage);
  }
  gotoregister() {
    this.navCtrl.push(RegisterPage);
  }
}
