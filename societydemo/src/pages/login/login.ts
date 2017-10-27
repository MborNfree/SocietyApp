
<<<<<<< HEAD

import { ForgotpasswordPage } from './../forgotpassword/forgotpassword';
import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';

=======
>>>>>>> 4e111f8482220dfe7aab84a9eee76b9e1cf43f5c
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';


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

  username:any;
  password:any;
  authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.username = window.localStorage.getItem('username');
    this.password = window.localStorage.getItem('password');
    sessionStorage.setItem("Sessionusername", this.username);
           this.authForm = formBuilder.group({
               username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
               password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
           });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
        window.localStorage.setItem('username', value.username);
        window.localStorage.setItem('password', value.password);

        if (value.username != '' && value.password != '' && value.username != 'null'   && value.password != 'null' ) {
          this.navCtrl.push(HomePage);
        }
    }
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
