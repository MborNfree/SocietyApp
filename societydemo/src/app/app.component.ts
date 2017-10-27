import { Component,ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Models
import { MenuOptionModel, SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';

import { CircularlistPage } from './../pages/circularlist/circularlist';
import { RulesPage } from './../pages/rules/rules';
import { DocumentuploadPage } from './../pages/documentupload/documentupload';
import { EventlistPage } from './../pages/eventlist/eventlist';
import { EmergencycontactlistPage } from './../pages/emergencycontactlist/emergencycontactlist';
import { HomePage } from './../pages/home/home';
import { ElectricianlistPage } from './../pages/electricianlist/electricianlist';
import { DoctorlistPage } from './../pages/doctorlist/doctorlist';
import { PlumberlistPage } from './../pages/plumberlist/plumberlist';
import { DosdontsPage } from './../pages/dosdonts/dosdonts';
import { NewsPage } from './../pages/news/news';
import { CommitteelistPage } from './../pages/committeelist/committeelist';
import { ResidentlistPage } from './../pages/residentlist/residentlist';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';
import { AddEventAdminPage } from '../pages/add-event-admin/add-event-admin';
import { AddPropertyAdminPage } from '../pages/add-property-admin/add-property-admin';
import { AddCircularAdminPage } from '../pages/add-circular-admin/add-circular-admin';
import { ResidentListAdminPage } from '../pages/resident-list-admin/resident-list-admin';
import { CommitteeListAdminPage } from '../pages/committee-list-admin/committee-list-admin';

import { SideMenuSettings } from './../shared/side-menu-content/side-menu-content.component';
import { DosdontsPage } from '../pages/dosdonts/dosdonts';

@Component({

  templateUrl: 'app.html'
})
export class MySocietyApp {

  rootPage: any = LoginPage;
  activePage:any;
  @ViewChild(Nav) nav: Nav;

  // Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

   pages: Array<{title: string, component: any,icon:string}>;

   	// Options to show in the SideMenuComponent
	public options: Array<MenuOptionModel>;

    // Settings for the SideMenuComponent
    public sideMenuSettings: SideMenuSettings = {
      accordionMode: true,
      showSelectedOption: true,
      selectedOptionClass: 'my-selected-option',
      subOptionIndentation: {
        md: '56px',
        ios: '64px',
        wp: '56px'
      }
    };

  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen,	private alertCtrl: AlertController,public menuCtrl: MenuController) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();

this.initializeApp();
      this.pages=[

           {title: 'Home', component:HomePage,icon:'home'},
           {title: 'Profile',component: ProfilePage,icon:'contact'},
           {title: 'News',component: NewsPage,icon:'logo-designernews'},
           {title: 'Committee List',component: CommitteelistPage,icon:'contacts'},
           {title: 'Resident List',component: ResidentlistPage,icon:'people'},
           {title: 'DOS & DONTS',component: DosdontsPage,icon:'clipboard'},
           {title: 'Plumber Lists',component: PlumberlistPage,icon:'hammer'},
           {title: 'Doctor List',component: DoctorlistPage,icon:'contact'},
           {title: 'Electrician List',component: ElectricianlistPage,icon:'construct'},
           {title: 'Emergency Contacts',component:EmergencycontactlistPage,icon:'plus'},
           {title: 'Event List',component:EventlistPage,icon:''},
           {title: 'Circular List',component:CircularlistPage,icon:'note'},
           {title: 'Upload Document',component:DocumentuploadPage,icon:'note'},
           {title: 'Rules & Regulations',component:RulesPage,icon:'book'},
           {title: 'Upload Document',component:DocumentuploadPage,icon:''},
           {title: 'Admin add event',component:AddEventAdminPage,icon:'calender'},
           {title: 'Admin add Property',component:AddPropertyAdminPage,icon:'building'},
           {title: 'Admin add Circular',component:AddCircularAdminPage,icon:''},
           {title: 'Admin Resident List',component:ResidentListAdminPage,icon:'people'},
           {title: 'Admin Committee List',component:CommitteeListAdminPage,icon:'user'}


       ];

       this.activePage=this.pages[0];

    }
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        	// Initialize some options
			this.initializeOptions();
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
            // logout logic
            // redirect to home
          this.nav.setRoot(HomePage);
      }
    }

    checkPreviousAuthorization(): void {
      if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
         (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = HomePage;
      }
    }

    private initializeOptions(): void {
      this.options = new Array<MenuOptionModel>();

      // Load simple menu options
      // ------------------------------------------
      this.options.push({
        iconName: 'home',
        displayName: 'Home',
        component: HomePage,

        // This option is already selected
        selected: true
      });

      this.options.push({
        iconName: 'card',
        displayName: 'Bill',
        component: DocumentuploadPage
      });

 // Load options with nested items (with icons)
      // -----------------------------------------------
      this.options.push({
        displayName: 'Documents',
        subItems: [
          {
            iconName: 'basket',
            displayName: 'User Documents',
            component: DocumentuploadPage
          },
          {
            iconName: 'bookmark',
            displayName: 'Society Documents',
            component: EventlistPage
          }
        ]
      });

      this.options.push({
        iconName: 'calendar',
        displayName: 'Events',
        component: EventlistPage
      });

      this.options.push({
        iconName: 'medkit',
        displayName: 'Emergency Contacts',
        component: EmergencycontactlistPage
      });

      this.options.push({
        iconName: 'easel',
        displayName: 'News',
        component: NewsPage
      });

      this.options.push({
        iconName: 'person',
        displayName: 'Profile',
        component: ProfilePage
      });

      this.options.push({
        iconName: 'hand',
        displayName: 'Rules and Regulation',
        component: DosdontsPage
      });






      // Load options with nested items (without icons)
      // -----------------------------------------------
      this.options.push({
        displayName: 'Services',
        subItems: [
          {
            iconName: 'plus-circled',
            displayName: 'Doctors',
            component: DoctorlistPage
          },
          {
            iconName: 'hammer',
            displayName: 'Plumbers',
            component: PlumberlistPage
          },
          {
            iconName: 'bookmark',
            displayName: 'Electrician',
            component: ElectricianlistPage
          }
        ]
      });

      this.options.push({
        displayName: 'Admin Section',
        subItems: [
          {
            iconName: 'basket',
            displayName: 'User Documents',
            component: DocumentuploadPage
          },
          {
            iconName: 'albums',
            displayName: 'Society Documents',
            component: EventlistPage
          }
        ]
      });

      // Load special options
      // -----------------------------------------------
      this.options.push({
        displayName: 'Special options',
        subItems: [
          {
            iconName: 'log-in',
            displayName: 'Login',
            custom: {
              isLogin: true
            }
          },
          {
            iconName: 'log-out',
            displayName: 'Logout',
            custom: {
              isLogout: true
            }
          },
          {
            iconName: 'globe',
            displayName: 'Open Google',
            custom: {
              isExternalLink: true,
              externalUrl: 'http://www.google.com'
            }
          }
        ]
      });
    }
    public selectOption(option: MenuOptionModel): void {
      this.menuCtrl.close().then(() => {

        if (option.custom && option.custom.isLogin) {
          this.presentAlert('You\'ve clicked the login option!');
        } else if (option.custom && option.custom.isLogout) {
          this.presentAlert('You\'ve clicked the logout option!');
        } else if(option.custom && option.custom.isExternalLink) {
          let url = option.custom.externalUrl;
          window.open(url, '_blank');
        } else {
          // Redirect to the selected page
          this.nav.setRoot(option.component || EventlistPage, { 'title': option.displayName });
        }
      });
    }
    public collapseMenuOptions(): void {
      // Collapse all the options
      this.sideMenu.collapseAllOptions();
    }

    public presentAlert(message: string): void {
      let alert = this.alertCtrl.create({
        title: 'Information',
        message: message,
        buttons: ['Ok']
      });
      alert.present();
    }

  }
