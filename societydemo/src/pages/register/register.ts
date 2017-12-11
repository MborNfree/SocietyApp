import { LoginPage } from "./../login/login";

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
    this.users = fdb.list("/users");
    this.authForm = formBuilder.group({
<<<<<<< HEAD
      // usernm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(30)])],
       usernm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      flat: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])],
      eml: ['',Validators.compose([Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?]"), Validators.minLength(8), Validators.maxLength(30)])],
      family: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      car: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      firstnme: ['',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)])],
      lastname: ['',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)])],
      wingno: ['',Validators.compose([Validators.required, Validators.minLength(1),Validators.maxLength(2)])],
      phoneNumber: ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(12)])],

  });                                                                                                                                                                
=======
      usernm: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
          Validators.minLength(6),
          Validators.maxLength(30)
        ])
      ],
      pwd: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
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
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?]"
          ),
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ],
      family: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(1)
        ])
      ],
      car: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(1)
        ])
      ],
      firstnme: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      lastname: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      wingno: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2)
        ])
      ],
      phoneNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12)
        ])
      ]
    });
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
  }

  signIn(phoneNumber: number) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + phoneNumber;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = this.alertCtrl.create({
          title: "Enter the Confirmation code",
          inputs: [
            { name: "confirmationCode", placeholder: "Confirmation Code" }
          ],
          buttons: [
            {
              text: "Cancel",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Send",
              handler: data => {
                // Here we need to handle the confirmation code
                confirmationResult
                  .confirm(data.confirmationCode)
                  .then(function(result) {
                    // User signed in successfully.
                    console.log(result.user);
                    // ...
                  })
                  .catch(function(error) {
                    // User couldn't sign in (bad verification code?)
                    // ...
                  });
              }
            }
          ]
        });
        prompt.present();
      })
      .catch(function(error) {
        console.error("SMS not sent", error);
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

  registerUser(phoneNumber: number) {
    alert(this.fname.value);
    // const appVerifier = this.recaptchaVerifier;
<<<<<<< HEAD
    // const phoneNumberString = "+91" + phoneNumber;
=======
    const phoneNumberString = "+91" + phoneNumber;
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027
    let currentUserUid = this.fire.auth.currentUser.uid;
    // firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    //   .then( confirmationResult => {

    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     let prompt = this.alertCtrl.create({
    //       title: 'Enter the Confirmation code',
    //       inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
    //       buttons: [
    //         { text: 'Cancel',
    //           handler: data => { console.log('Cancel clicked'); }
    //         },
    //         { text: 'Send',
    //           handler: data => {
    //             this.fdb.list("/users/").push( { 'email': this.email.value,'phone':this.phone.value, 'password': this.password.value,'fnm':this.fname.value,'lnm':this.lname.value,'flat':this.flatn.value,'wing':this.wing.value,'vehicle':this.vehicle.value,'family':this.familyMember.value,'unm':this.user.value });
    //             // Here we need to handle the confirmation code
    //             confirmationResult.confirm(data.confirmationCode)
    //             .then(function (result) {

    //               this.alert('Registered!'+result.user);
    //               this.navCtrl.push(LoginPage);
    //               // User signed in successfully.
    //               console.log(result.user);
    //               // ...
    //             }).catch(function (error) {
    //               // User couldn't sign in (bad verification code?)
    //               // ...
    //             });
    //           }
    //         }
    //       ]
    //     });
    //     prompt.present();
    // })
    // .catch(function (error) {
    //   console.error("SMS not sent", error);
    //   this.alert("SMS not sent", error);
    // });
    this.fire.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
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

        console.log("got data ", data);

        this.alert("Registered!");
        this.navCtrl.push(LoginPage);
      })
      .catch(error => {
        console.log("got an error ", error);
        this.alert(error.message);
      });
    //s	console.log('Would register user with ', this.email.value, this.password.value);
  }

  doLogin() {
    this.navCtrl.push(LoginPage);
  }
}
