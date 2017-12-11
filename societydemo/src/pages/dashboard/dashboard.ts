import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { LoginPage } from "../login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }

  showAlert() {
    let confirm = this.alertCtrl.create({
      title: "Exit Application?",
      message: "Click Yes to Exit !",
      buttons: [
        {
          text: "NO"
          // handler: () => {
          //   console.log('No clicked');
          // }
        },
        {
          text: "YES",
          handler: () => {
            console.log("YES clicked");
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
  logout() {
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("Sessionuid");
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
  ViewProfile() {
    this.navCtrl.push(ProfilePage);
  }
}
