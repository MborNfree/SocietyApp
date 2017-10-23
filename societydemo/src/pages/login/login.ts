import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  login: { name1: string,  password1: string } = {
    name1: '',
    password1 : ''
  };



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  loginclick()
  {
      if (this.login.name1 != '' && this.login.name1 != '' && this.login.name1 != 'null'   && this.login.password1 != 'null' ) {
        alert('Login Success!');
       // alert('uid-'+this.login.name1);
       // alert('pwd-'+this.login.password1);

        this.navCtrl.push(HomePage);

    }
    else{
      alert('Not Login?Go to sign up!');

      this.navCtrl.push(SignupPage);
    }
  }

  signup()
  {
      this.navCtrl.push(SignupPage);
  }

  forgotPwd()
  {
      this.navCtrl.push(SignupPage);
  }
    // alert('Login Success!');
    // this.navCtrl.push(HomePage);
}
