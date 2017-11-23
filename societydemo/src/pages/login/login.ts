import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  currentUserUid:any;

  @ViewChild('password') password;
  @ViewChild('email') email;

  constructor(private alertCtrl: AlertController,private fdb: AngularFireDatabase,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {

    this.email = window.localStorage.getItem('usernm');
    this.password = window.localStorage.getItem('password');

    sessionStorage.setItem("Sessionusername", this.email);
           this.authForm = formBuilder.group({
            usernm: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
               password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
           });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // onSubmit(value: any): void {
  //   if(this.authForm.valid) {
  //       window.localStorage.setItem('username', value.usernm);
  //       window.localStorage.setItem('password', value.password);

  //       if (value.usernm != '' && value.password != '' && value.usernm != 'null'   && value.password != 'null' ) {
  //         this.navCtrl.push(HomePage);
  //       }
  //       // else if (value.usernm === 'admin@mail.com' && value.password === 'admin') {
  //       //   this.router.navigate(['pages/dashboard']);
  //       //   console.log('Success Login');
  //       // }
  //        else {
  //         console.log('Error Login');
  //       }
  //   }
  // }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    // alert(this.email.value);
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      let status= this.fdb.list('users', ref => ref.orderByChild('ID').equalTo('ID'));
      console.log('Success! You\'re logged in');
      console.log(status);
      //this.alert('Success! You\'re logged in'+status);
      this.alert('Success! You\'re logged in');
      this.navCtrl.push( HomePage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  //	console.log('Would sign in with ', this.email.value, this.password.value);
  }
  signup()
  {
      this.navCtrl.push(RegisterPage);
  }

  forgotPwd()
  {
      this.navCtrl.push(ForgotpasswordPage);
  }

}
