import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AngularFireObject, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Profile } from '../../models/Profile';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

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
  items: any[];
  userp: FirebaseListObservable<any[]>;
  UserProfile: any;
  user: FirebaseListObservable<{}>;
  userData:FirebaseListObservable<{}>;
  username:any;
  password:any;
  fnm:any;
  lnm:any;
  flatno:any;
  email:any;
  family:any;
  vehicles:any;
  public uIDParam;

  authForm: FormGroup;
  o :any;
  starCountRef:any;
  UserElement:any;
  updateStarCount:any;
  userRef: string = '/users/';
  userId: string;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private fdb: AngularFireDatabase,private fireAuth: AngularFireAuth) {

    this.uIDParam = navParams.get('uid');
    var ref = firebase.database().ref("users");

    ref.on('value',itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        console.log(itemSnap.val());
        this.items.push(itemSnap.val());
        return false;
      });
      console.log(this.items['0']);
    });

    // Get a reference to the database service

    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      flatno: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])],
      email: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      family: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(2)])],
      vehicles: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(2)])],
      fnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      lnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])]
     });

  }
  ngOnInit(){
    this.UserProfile=this.getCurrentUserProfile();
    console.log('profile'+JSON.stringify(this.UserProfile));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getCurrentUserProfile() {
    let currentUserUid = this.fireAuth.auth.currentUser.uid;
    console.log(currentUserUid);
    return this.fdb.list(this.userRef);

  }

  onSubmit(value: any): void {

    if(this.authForm.valid) {

      let currentUserUid = this.fireAuth.auth.currentUser.uid;
      let status =this.fdb.object(`users/${currentUserUid}`).update(value);
      alert(status);
    }
  }

}
