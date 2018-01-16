import { Camera } from '@ionic-native/camera';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
// import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  user: FirebaseListObservable<{}>;
  userId: string;
  username: string;
  password: string;
  fnm: string;
  lnm: string;
  flatno: any;
  email: string;
  family: any;
  Id: any;
  vehicles: any;
  public uIDParam;
  sessionUser: string;
  public inactive: boolean = true;

  authForm: FormGroup;
  userRef: string = "/users/";

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private fdb: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {
    this.uIDParam = navParams.get("uid");
    var ref = firebase.database().ref("users");
    //ref.on('value', this.gotData,this.errData);

    // Get a reference to the database services

    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
      let self = this;
      ref.on(
        "value",
        function(data) {
          console.log("data");

          var users = data.val();
          var keys = Object.keys(users);

          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var sessionUser = sessionStorage.getItem("Sessioneml");
            if (users[k].email == sessionUser) {
              console.log("true");
              self.fnm = users[k].first_name;
              self.lnm = users[k].last_name;
              self.password = users[k].password;
              self.email = users[k].email;
              self.Id = users[k].ID;
              self.username = users[k].username;
              self.flatno = users[k].flatno;
              self.family = users[k].familyMember;
              self.vehicles = users[k].parking_slot;
            }
          }
        },
        function(error) {
          //Error code goes here
        }
      );
      // ref.on('value', this.gotData,this.errData);
    });
    this.authForm = formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z-]*"),
          Validators.minLength(8),
          Validators.maxLength(30)
        ])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      flatno: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.minLength(3)
        ])
      ],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
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
      vehicles: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.maxLength(1)
        ])
      ],
      fnm: [
        "",
        Validators.compose([Validators.required, Validators.minLength(10)])
      ],
      lnm: [
        "",
        Validators.compose([Validators.required, Validators.minLength(10)])
      ]
    });
  }

  changeStatus() {
    this.inactive = !this.inactive;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }

  onSubmit(value: any): void {
    alert(JSON.stringify(value));
    console.log("v" + JSON.stringify(value));

    if (this.authForm.valid) {
      let currentUserUid = this.fireAuth.auth.currentUser.uid;
      let status = this.fdb.object(`users/${currentUserUid}`).update(value);
      //alert(status);
    }
  }
}
