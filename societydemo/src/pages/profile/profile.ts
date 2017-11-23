import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Profile } from '../../models/Profile';

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

  username:any;
  password:any;
  fnm:any;
  lnm:any;
  flatno:any;
  email:any;
  family:any;
  vehicles:any;

  authForm: FormGroup;
  UserProfile :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private fdb: AngularFireDatabase,private fireAuth: AngularFireAuth) {

    this.username = window.localStorage.getItem('username');
    this.password = window.localStorage.getItem('password');
    this.fnm = window.localStorage.getItem('fnm');
    this.lnm = window.localStorage.getItem('lnm');
    this.flatno = window.localStorage.getItem('flatno');
    this.email = window.localStorage.getItem('email');
    this.family = window.localStorage.getItem('family');
    this.vehicles = window.localStorage.getItem('vehicles');

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
  console.log(this.UserProfile);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getCurrentUserProfile() {
    let currentUserUid = this.fireAuth.auth.currentUser.uid;
    return this.fdb.object(`users/${currentUserUid}`);
}
  onSubmit(value: any): void {

    if(this.authForm.valid) {

      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      window.localStorage.setItem('fnm', value.fnm);
      window.localStorage.setItem('lnm', value.lnm);
      window.localStorage.setItem('flatno', value.flatno);
      window.localStorage.setItem('email', value.email);
      window.localStorage.setItem('family', value.family);
      window.localStorage.setItem('vehicles', value.vehicles);

      let currentUserUid = this.fireAuth.auth.currentUser.uid;
      let status =this.fdb.object(`users/${currentUserUid}`).update(value);
      alert(status);
    }
  }


}
