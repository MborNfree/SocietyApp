import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {  ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


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

  username:string;
  password:string;
  fnm:string;
  lnm:string;
  flatno:any;
  email:string;
  family:any;
  Id :any;
  vehicles:any;
  public uIDParam;
  sessionUser:string;

  authForm: FormGroup;
  userRef: string = '/users/';

  constructor( private route: ActivatedRoute, private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private fdb: AngularFireDatabase,private fireAuth: AngularFireAuth) {

    this.uIDParam = navParams.get('uid');
    var ref = firebase.database().ref("users");
    //ref.on('value', this.gotData,this.errData);

    // Get a reference to the database service

    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid;
      let self = this;
      ref.on('value', function (data) {
      console.log('data');

      var users = data.val();
      var keys = Object.keys(users);

       for ( var i = 0; i < keys.length; i++) {
         var k = keys[i];
         var sessionUser = sessionStorage.getItem("Sessioneml");
         if (users[k].email == sessionUser) {
          console.log('true');
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
      }, function (error) {
            //Error code goes here
      });
     // ref.on('value', this.gotData,this.errData);

    })
    this.authForm = formBuilder.group({
      username: [this.username, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(30)])],
      password: [this.password, Validators.compose([Validators.required, Validators.minLength(8)])],
      flatno: [this.flatno, Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])],
      email: [this.email,Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?]"), Validators.minLength(6), Validators.maxLength(30)])],
      family: [this.family,Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      vehicles: [this.vehicles,Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      fnm: [this.fnm,Validators.compose([Validators.required, Validators.minLength(6)])],
      lnm: [this.lnm,Validators.compose([Validators.required, Validators.minLength(6)])]
     });


  }
// gotData(data){
//   console.log('data');
//  // console.log(data.val());
//   var users = data.val();
//   var keys = Object.keys(users);
//  // console.log('keys'+keys);
//   var i;
//   for(i=0; i < keys.length;i++){

//     var k = keys[i];
//     var sessionUser =sessionStorage.getItem("Sessioneml");
//     //  console.log(sessionUser);
//     //  console.log(users[k].email);

//     if(users[k].email == sessionUser){
//         console.log('true');

//         var email = users[k].email;
//         var Id = users[k].ID;
//         var username = users[k].username;
//         var flatno = users[k].flatno;
//         var family = users[k].familyMember;
//         var vehicles= users[k].parking_slot;
//         var fnm= users[k].first_name;
//         var lnm= users[k].last_name;


//         console.log('user data ='+Id, username,flatno,family,vehicles);
//     }
//   }
// }
//   errData(err){
//     console.log('Error');
//     console.log(err);
//   }


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
