import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

onSubmit(){
  this.navCtrl.push(LoginPage);
}
<<<<<<< HEAD
gotoregister(){
  this.navCtrl.push(RegisterPage);
}

=======
>>>>>>> c06f0f7822fa18c57005bd6c5c31cdebf8803bec

}
