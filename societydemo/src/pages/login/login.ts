import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';


=======
>>>>>>> develop
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

<<<<<<< HEAD
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
=======
  login: { name1: string,  password1: string } = {
    name1: '',
    password1 : ''
  };



  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> develop
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

<<<<<<< HEAD
  onSubmit(value: any): void {
    if(this.authForm.valid) {
        window.localStorage.setItem('username', value.username);
        window.localStorage.setItem('password', value.password);

        if (value.username != '' && value.password != '' && value.username != 'null'   && value.password != 'null' ) {
          this.navCtrl.push(HomePage);
        }
=======

  loginclick()
  {
      if (this.login.name1 != '' && this.login.name1 != "undefined" && this.login.name1 != 'null'  ) {
        alert('Login Success!');
       // alert('uid-'+this.login.name1);
       // alert('pwd-'+this.login.password1);

        this.navCtrl.push(HomePage);

    }else{
      alert('Not Login?Go to sign up!');
      this.navCtrl.push(SignupPage);
>>>>>>> develop
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
