import { Camera } from '@ionic-native/camera';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {

  public userData: any;
  public userID: any;
  public userKey: any;

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
    public toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cameraPlugin: Camera,
    private fdb: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {
    this.uIDParam = navParams.get("uid");

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

    var sessionUser = sessionStorage.getItem("Sessioneml");
    console.log("Email: ",sessionStorage.getItem("Sessioneml"));

    var ref = firebase.database().ref('users');
    ref.orderByChild("email").equalTo(sessionUser).once("value", (items : any) => {
      console.log("Key: ",items.key);
      console.log("Value: ",items.val());

      let users : any = [];

      items.forEach((item) =>
      {
        users.push({
	        key           : item.key,
	        device_id     : item.val().device_id,
	        email         : item.val().email,
	        familyMember  : item.val().familyMember,
	        first_name    : item.val().first_name,
	        flatno        : item.val().flatno,
	        last_name     : item.val().last_name,
	        parking_slot  : item.val().parking_slot,
          password      : item.val().password,
          username      : item.val().username,
          wing          : item.val().wing,
          id            : item.val().ID
        });
        this.userID = item.val().ID;
        console.log("User ID: ",this.userID);
        this.userKey = item.key;
        console.log("User Key: ",this.userKey);
      });
      console.log("User Data: ",users);
      this.userData = users;
    });
  }

  saveClick()
  {
    let username   : string = this.authForm.controls["username"].value,
        flatno     : string = this.authForm.controls["flatno"].value,
        email      : string = this.authForm.controls["email"].value,
        password   : string = this.authForm.controls["password"].value,
        family     : string = this.authForm.controls["family"].value,
        vehicles   : string = this.authForm.controls["vehicles"].value

    //alert("Key: "+this.userID+" Username: "+username+" Flat No: "+flatno+" Email: "+email+" Password: "+password+" Family: "+family+" Vehicles: "+vehicles);
    //console.log("1 Key: "+this.userKey+" User ID: "+this.userID+" Username: "+username+" Flat No: "+flatno+" Email: "+email+" Password: "+password+" Family: "+family+" Vehicles: "+vehicles);
    this.updateProfile(this.userKey,this.userID,username,flatno,email,password,family,vehicles);
  }

  updateProfile(Key, ID, Username, FlatNo, Email, Password, Family, Vehicles)
  {
    //console.log("2 Key: "+Key+" User ID: "+ID+" Username: "+Username+" Flat No: "+FlatNo+" Email: "+Email+" Password: "+Password+" Family: "+Family+" Vehicles: "+Vehicles);

    this.updateUser(Key,
      {
        email: Email,
        familyMember: Family,
        flatno: FlatNo,
        parking_slot: Vehicles,
        password: Password,
        username: Username
      });

      this.toastCtrl.create({message: 'Profile updated successfully!', duration: 3000}).present();
  }

  updateUser(id, userObj) : Promise<any>
   {
      return new Promise((resolve) =>
      {
        var updateRef = firebase.database().ref('users').child(id);
	      updateRef.update(userObj);
        resolve(true);
      });
   }

  takeSelfie(): void {

    this.cameraPlugin.getPicture({
      quality: 95,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(profilePicture => {
      // Send the picture to Firebase Storage
      const selfieRef = firebase.storage().ref('profilePictures/user1/' + Image);
      selfieRef
        .putString(profilePicture, 'base64', { contentType: 'image/png' })
        .then(savedProfilePicture => {
          firebase
            .database()
            .ref(`users/profilePicture`)
            .push(savedProfilePicture.downloadURL);
        });
    },
      error => {
        // Log an error to the console if something goes wrong.
        console.log("ERROR -> " + JSON.stringify(error));
      });
  }
}
