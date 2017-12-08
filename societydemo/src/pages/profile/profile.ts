import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Component, QueryList, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AngularFireObject, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Profile } from '../../models/Profile';
import * as firebase from 'firebase';
// import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  item: any;
  subscription: any;
  items: any[];
  userp: FirebaseListObservable<any[]>;
  UserProfile: any;
  userData1:any;
  user: FirebaseListObservable<{}>;
  userData:FirebaseListObservable<{}>;

  items1: FirebaseListObservable<any[]> = null;
  userId: string;

  username:any;
  password:any;
  fnm:any;
  lnm:any;
  flatno:any;
  email:any;
  family:any;
  vehicles:any;
  public uIDParam;
  sessionUser:string;

  authForm: FormGroup;
  userRef: string = '/users/';

  constructor( private route: ActivatedRoute,private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private fdb: AngularFireDatabase,private fireAuth: AngularFireAuth) {

    this.uIDParam = navParams.get('uid');
    var ref = firebase.database().ref("users");
    //ref.on('value', this.gotData,this.errData);

    // ref.on('value',itemSnapshot => {
    //   this.items = [];
    //   itemSnapshot.forEach(itemSnap => {
    //    // console.log(itemSnap.val());
    //     this.items.push(itemSnap.val());
    //     return false;
    //   });
    //  // console.log(this.items['0']);
    // });

    // Get a reference to the database service

    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid;

      ref.on('value', this.gotData,this.errData);

    })
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\-]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      flatno: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])],
      email: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      family: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      vehicles: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      fnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      lnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])]
     });

  }
gotData(data){
  console.log('data');
 // console.log(data.val());
  var users = data.val();
  var keys = Object.keys(users);
 // console.log('keys'+keys);
  var i;
  for(i=0; i < keys.length;i++){

    var k = keys[i];
    var sessionUser =sessionStorage.getItem("Sessioneml");
    // console.log(sessionUser);
    if(users[k].email == sessionUser){
        console.log('true');
        var email = users[k].email;
        var Id = users[k].ID;
        var username = users[k].username;
        var flatno = users[k].flatno;
        var family = users[k].familyMember;
        var vehicles= users[k].parking_slot;

        console.log('user data ='+Id, username,flatno,family,vehicles);
    }
  }
}
  errData(err){
    console.log('Error');
    console.log(err);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
   // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  // getCurrentUserProfile(id: string): FirebaseListObservable<Profile[]> {

  //   const user = this.fdb.object('users/'+id);
  //   console.log(user);
  //   user.valueChanges().subscribe(data => {
  //     if(data.$value !== null) {
  //       console.log('User does not exist');
  //     } else {
  //       console.log('User does exist');
  //     }
  //   });
  //  // return this.fdb.object('/users/'+id);
  //   // if (!this.userId) return;
  //   // let currentUserUid = this.fireAuth.auth.currentUser.uid;
  //   // //let status= this.fdb.list('users', ref => ref.orderByChild('ID').equalTo(this.sessionUser));
  //   // return this.fdb.list(`users/${currentUserUid}`);
  //   // //return status;
  // }


  onSubmit(value: any): void {
    console.log('v'+JSON.stringify(value));

    if(this.authForm.valid) {

      let currentUserUid = this.fireAuth.auth.currentUser.uid;
      let status =this.fdb.object(`users/${currentUserUid}`).update(value);
      alert(status);
    }
  }


}
