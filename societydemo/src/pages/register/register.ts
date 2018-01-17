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
// import firebase from "firebase";
import * as firebase from "firebase/app";
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { LoginPage } from "./../login/login";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  uDid: any;
  users: AngularFireList<any>;
  authForm: FormGroup;
  arrData = [];
  usernm;
  firstnme;
  lastname;
  phoneNumber;
  car;
  wingno;
  family;
  eml;
  paswd;
  flat;

  @ViewChild("username") user;
  @ViewChild("password") password;
  @ViewChild("email") email;
  @ViewChild("fnm") fname;
  @ViewChild("lnm") lname;
  @ViewChild("vehicle") vehicle;
  @ViewChild("familyMmber") familyMember;
  @ViewChild("flatn") flatn;
  @ViewChild("wing") wing;
  @ViewChild("phone") phone;

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private fdb: AngularFireDatabase,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private fire: AngularFireAuth,
    private uniqueDeviceID: UniqueDeviceID
  ) {
    //alert(this.user);
    this.users = fdb.list("/users");
    this.authForm = formBuilder.group({
      usernm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z ]*"),
          Validators.minLength(6),
          Validators.maxLength(30)
        ])
      ],
      pwd: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      flat: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(3)
        ])
      ],
      eml: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&.'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?]"
          ),
          Validators.minLength(5),
          Validators.maxLength(30)
        ])
      ],
      family: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.maxLength(1)
        ])
      ],
      car: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.maxLength(1)
        ])
      ],
      firstnme: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z ]*"),
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      lastname: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z ]*"),
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      wingno: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]*"),
          Validators.minLength(1),
          Validators.maxLength(2)
        ])
      ],
      phoneNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(10),
          Validators.maxLength(12)
        ])
      ]
    });

  //  this.uDid = this.uniqueDeviceID.get()
  //   .then((uDid: any) => alert('id'+uDid))
  //   .catch((error: any) => alert('err'+error));

  //   alert('did'+ JSON.parse(this.uDid));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
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

  registerUser(phoneNumber: number) {


    //alert(this.fname.value);
    const appVerifier = this.recaptchaVerifier;
    //const phoneNumberString = "+91" + phoneNumber;

    this.fire.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        let currentUserUid = this.fire.auth.currentUser.uid;
        this.fdb.list("/users/"+this.fire.auth.currentUser.uid).push({
          ID: currentUserUid,
          email: this.email.value,
          password: this.password.value,
          first_name: this.fname.value,
          last_name: this.lname.value,
          flatno: this.flatn.value,
          wing: this.wing.value,
          parking_slot: this.vehicle.value,
          familyMember: this.familyMember.value,
          username: this.user.value

        });

        console.log("got data ", data);

        this.alert("Registered!");
        data.sendEmailVerification().then(
          function() {
            alert("Email Sent Please check your mailbox!");
          },
          function(error) {
            alert("error!");
          }
        );
        this.navCtrl.push(LoginPage);
      })
      .catch(error => {
        console.log("got an error ", error);
        this.alert(error.message);
      });

    // console.log('Would register user with ', this.email.value, this.password.value);
  }

  doLogin() {
    this.navCtrl.push(LoginPage);
  }
}
