import { DashboardPage } from './../dashboard/dashboard';

import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ForgotpasswordPage } from "../forgotpassword/forgotpassword";
import { AngularFireAuth } from "angularfire2/auth";

import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  signinForm: FormGroup;
  currentUserUid: any;
  sessionUser: any;
  @ViewChild("password") password;
  @ViewChild("email") email;

  constructor(
    private alertCtrl: AlertController,
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    this.signinForm = formBuilder.group({
      usernm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
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

  signInUser() {
    this.fire.auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.currentUserUid = JSON.stringify(data.uid);
        sessionStorage.setItem("Sessionuid", this.currentUserUid);
        sessionStorage.setItem("Sessioneml", data.email);
        // let status = this.fdb.list("users", ref =>
        //   ref.orderByChild("ID").equalTo("ID")
        // );
        console.log("Success! You're logged in");
        // console.log("st" + JSON.stringify(status));
        if(data.email=='admin@niyanta.co.in'){
          alert('Admin Dashboard');
          this.navCtrl.push(DashboardPage, {
            uid: this.currentUserUid
          });
        }else{
          this.navCtrl.push(HomePage, {
            uid: this.currentUserUid
          });
        }

        // user is logged in
      })
      .catch(error => {
        console.log("got an error", error);
        this.alert(error.message);
      });
    //	console.log('Would sign in with ', this.email.value, this.password.value);
  }
  signup() {
    this.navCtrl.push(RegisterPage);
  }

  forgotPwd() {
    this.navCtrl.push(ForgotpasswordPage);
  }
}
