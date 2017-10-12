import { DoctorlistPage } from './../pages/doctorlist/doctorlist';
import { PlumberlistPage } from './../pages/plumberlist/plumberlist';
import { DosdontsPage } from './../pages/dosdonts/dosdonts';
import { NewsPage } from './../pages/news/news';

import { CommitteelistPage } from './../pages/committeelist/committeelist';
import { ResidentlistPage } from './../pages/residentlist/residentlist';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';
import { Component,ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage: any = LoginPage;
  activePage:any;
  @ViewChild(Nav) nav: Nav;

   pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen,public menuCtrl: MenuController) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();

this.initializeApp();
      this.pages=[

           {title: 'Home', component:HomePage},
           {title: 'Profile',component: ProfilePage},
           {title: 'News',component: NewsPage},
           {title: 'Committee List',component: CommitteelistPage},
           {title: 'Resident List',component: ResidentlistPage},
           {title: 'DOS & DONTS',component: DosdontsPage},
           {title: 'Plumber Lists',component: PlumberlistPage},
           {title: 'Doctor List',component: DoctorlistPage},
       ];

       this.activePage=this.pages[0];

    }
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      //this.nav.setRoot(page.component);
  
        if(page.component) {

             this.nav.setRoot(page.component);
          } else {
            // Since the component is null, this is the logout option
            // ...
  
            // logout logic
            // ...
  
            // redirect to home
          this.nav.setRoot(HomePage);
      }
    }
  }