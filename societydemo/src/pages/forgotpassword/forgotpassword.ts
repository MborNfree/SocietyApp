import { RegisterPage } from "./../register/register";
import { LoginPage } from "./../login/login";
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from "ionic-angular";
import firebase from "firebase";
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: "page-forgotpassword",
  templateUrl: "forgotpassword.html"
})
export class ForgotpasswordPage {

  authForm: FormGroup;
  email:string;
  @ViewChild("eml") Forgotemail;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForgotpasswordPage");
  }

  resetPassword(email: string) {
   //alert(JSON.stringify(email['email']));

    //var emailAddress = "user@example.com";
    var emailAddress = email['email'];
    firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert("Check your mail for reset your password");
    }).catch(function(error) {
      // An error happened.
      alert("An error happened");
    });

   // firebase.auth().sendPasswordResetEmail(JSON.stringify(email['email']));
  }
  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }
  gotoregister() {
    this.navCtrl.push(RegisterPage);
  }
}
