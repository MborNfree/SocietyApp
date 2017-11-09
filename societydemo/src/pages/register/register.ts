import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  users: AngularFireList<any>;
  authForm: FormGroup;
  arrData = [];
  usernm;
  firstnme;
  lastname;
 eml
 pwd
  flat
  wingno
  family
  car
	// @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('email') email;
  // @ViewChild('fnm') fname;
  // @ViewChild('lnm') lname;
  // @ViewChild('car') vehicle;
  // @ViewChild('familyMember') familyMember;
  // @ViewChild('flatn') flatn;

  constructor(private alertCtrl: AlertController,public navCtrl: NavController,private fdb: AngularFireDatabase, public navParams: NavParams,public formBuilder: FormBuilder,private fire: AngularFireAuth) {

    this.users = fdb.list('/users');
    this.authForm = formBuilder.group({
      usernm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(30)])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      flat: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(3)])],
      eml: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      family: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      car: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(1)])],
      firstnme: ['',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)])],
      lastname: ['',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)])],
      wingno: ['',Validators.compose([Validators.required, Validators.minLength(1),Validators.maxLength(2)])]

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  // btnAddClicked(){
  //   this.fdb.list("/myItems/").push(this.myInput);
  //   this.arrData.push(this.myInput);
  //   alert('added'+this.myInput);
  // }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    alert(this.email.value);
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {

      console.log('got data ', data);
      this.alert('Registered!');
      // this.users.push({
      //   name: data.eml,
      //   password : data.pwd
      // });
      this.navCtrl.push(LoginPage);
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.email.value, this.password.value);
  }


  doLogin() {

          this.navCtrl.push(LoginPage);
      }

  // onSubmit(value: any): void {
  //   if(this.authForm.valid) {

  //       window.localStorage.setItem('username', value.user);
  //       window.localStorage.setItem('password', value.password);
  //       window.localStorage.setItem('fnm', value.fnm);
  //       window.localStorage.setItem('lnm', value.lnm);
  //       window.localStorage.setItem('flatno', value.flatno);
  //       window.localStorage.setItem('email', value.email);
  //       window.localStorage.setItem('family', value.family);
  //       window.localStorage.setItem('vehicles', value.vehicles);

  //       if (value.user != '' && value.password != '' && value.user != 'null'   && value.password != 'null' ) {
  //         this.navCtrl.push(LoginPage);
  //       }else{
  //         this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.pwd.value)
  //         .then(data => {
  //           console.log('got data ', data);
  //           this.alert('Registered!');
  //         })
  //         .catch(error => {
  //           console.log('got an error ', error);
  //           this.alert(error.message);
  //         });
  //         console.log('Would register user with ', this.user.value, this.pwd.value);
  //       }
  //   }
  // }




}
