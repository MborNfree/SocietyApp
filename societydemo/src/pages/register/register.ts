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

import { LoginPage } from "./../login/login";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
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
    private fire: AngularFireAuth
  ) {
    alert(this.user);
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
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
  }

<<<<<<< HEAD
=======
  
>>>>>>> e28a80e393d3a8d41b52ce2e661bcc5fd6cec580
  alert(message: string) {
    this.alertCtrl
      .create({
        title: "Info!",
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }

<<<<<<< HEAD
  registerUser(phoneNumber: number) {
    alert(this.fname.value);
    const appVerifier = this.recaptchaVerifier;
    //const phoneNumberString = "+91" + phoneNumber;
=======
  registerUser(usernm,email,password,flatn,wing,familyMember,car,phoneNumber: number) {
    
alert(phoneNumber)
    // const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + phoneNumber;
    
   
    // let currentUserUid = this.fire.auth.currentUser.uid;
    // alert('cusr'+this.fire.auth.currentUser);
    // alert("icuid"+currentUserUid);
>>>>>>> e28a80e393d3a8d41b52ce2e661bcc5fd6cec580

    this.fire.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
<<<<<<< HEAD
        let currentUserUid = this.fire.auth.currentUser.uid;
        this.fdb
          .list("/users/")
          .push({
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
=======
        this.fdb.list("/users/").push({
          email: this.email.value,
          password: this.password.value,
          first_name: this.fname.value,
          last_name: this.lname.value,
          flatno: this.flatn.value,
          wing: this.wing.value,
          parking_slot: this.vehicle.value,
          familyMember: this.familyMember.value,
          username: this.usernm.value,
          phoneNumber:this.phoneNumber.value
        });
>>>>>>> e28a80e393d3a8d41b52ce2e661bcc5fd6cec580

        console.log("got data ", data);

        this.alert("Registered!");
<<<<<<< HEAD
        data.sendEmailVerification().then(
          function() {
            this.alert("Email Sent Please check your mailbox!");
          },
          function(error) {
            this.alert("error!");
          }
        );
=======
        data.sendEmailVerification().then(function() {
          this.alert("Email Sent Please check your mailbox!");

      }, function(error) {
        this.alert("error!");

      });
>>>>>>> e28a80e393d3a8d41b52ce2e661bcc5fd6cec580
        this.navCtrl.push(LoginPage);
      })
      .catch(error => {
        console.log("got an error ", error);
        this.alert(error.message);
      });

    
    //s	console.log('Would register user with ', this.email.value, this.password.value);
  }

  //   registerUser(
  //     usernm,
  //     email,
  //     password,
  //     flatn,
  //     wing,
  //     familyMember,
  //     car,
  //     phoneNumber: number
  //   ) {
  //     alert(this.fname.value);
  //     // const appVerifier = this.recaptchaVerifier;
  //     const phoneNumberString = "+91" + phoneNumber;
  //     //let currentUserUid = this.fire.auth.currentUser.uid;
  // console.log(this.fire.auth);
  //     this.fire.auth
  //       .createUserWithEmailAndPassword(this.email.value, this.password.value)
  //       .then(data => {
  //         this.fdb.list("/users/").push({
  //          // ID: currentUserUid,
  //           email: this.email.value,
  //           password: this.password.value,
  //           first_name: this.fname.value,
  //           last_name: this.lname.value,
  //           flatno: this.flatn.value,
  //           wing: this.wing.value,
  //           parking_slot: this.vehicle.value,
  //           familyMember: this.familyMember.value,
  //           username: this.usernm.value,
  //           phoneNumber: this.phoneNumber.value
  //         });

  //         console.log("got data ", data);

  //         this.alert("Registered!");
  //         data.sendEmailVerification().then(
  //           function() {
  //             this.alert("Email Sent Please check your mailbox!");
  //           },
  //           function(error) {
  //             this.alert("error!");
  //           }
  //         );
  //         this.navCtrl.push(LoginPage);
  //       })
  //       .catch(error => {
  //         console.log("got an error ", error);
  //         this.alert(error.message);
  //       });
  //     //	console.log('Would register user with ', this.email.value, this.password.value);
  //   }

  doLogin() {
    this.navCtrl.push(LoginPage);
  }
}
