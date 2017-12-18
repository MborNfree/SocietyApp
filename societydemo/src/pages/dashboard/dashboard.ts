import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { LoginPage } from "../login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { ProfilePage } from "../profile/profile";
import * as Chartist from 'chartist';

// declare var $:any;

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
export class DashboardPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {}
  ngOnInit(){
    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
         [287, 385, 490, 562, 594, 626, 698, 895, 952],
        [67, 152, 193, 240, 387, 435, 535, 642, 744],
        [23, 113, 67, 108, 190, 239, 307, 410, 410]
      ]
    };

    var optionsSales = {
      low: 0,
      high: 1000,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    var responsiveSales: any[] = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);
    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    var options = {
        seriesBarDistance: 10,
        axisX: {
            showGrid: false
        },
        height: "245px"
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Line('#chartActivity', data, options, responsiveOptions);

    var dataPreferences = {
        series: [
            [25, 30, 20, 25]
        ]
    };

    var optionsPreferences = {
        donut: true,
        donutWidth: 40,
        startAngle: 0,
        total: 100,
        showLabel: false,
        axisX: {
            showGrid: false
        }
    };

    new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    new Chartist.Pie('#chartPreferences', {
      labels: ['62%','32%','6%'],
      series: [62, 32, 6]
    });

  }
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
