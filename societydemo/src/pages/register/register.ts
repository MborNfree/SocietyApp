import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
  authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      flatno: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(4)])],
      email: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      family: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(2)])],
      vehicles: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(2)])],
      fnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      lnm: ['',Validators.compose([Validators.required, Validators.minLength(10)])]

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

        if (value.username != '' && value.password != '' && value.username != 'null'   && value.password != 'null' ) {
          this.navCtrl.push(LoginPage);
        }
    }
  }

  doSignup() {
    // Attempt to login in through our User service
    // this.e.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(HomePage);
    // }, (err) => {

    //   this.navCtrl.push(HomePage);

    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

  doLogin() {

      this.navCtrl.push(LoginPage);
  }

}
