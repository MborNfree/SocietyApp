// import * as firebase from "firebase/app";
import * as firebase from 'firebase';
import { Component, ViewChild } from "@angular/core";
import {
  Nav,
  Platform,
  MenuController,
  AlertController,
  Events,
  ModalController,
  ToastController
} from "ionic-angular";
//  import { Network } from "ionic-native";
 import { Network } from '@ionic-native/network';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../shared/services/auth.service";
// import { DataService } from "../shared/services/data.service";

import { FCM } from '@ionic-native/fcm';

// Models
import {
  MenuOptionModel,
  SideMenuContentComponent
} from "../shared/side-menu-content/side-menu-content.component";
import { CircularlistPage } from "./../pages/circularlist/circularlist";
import { DocumentuploadPage } from "./../pages/documentupload/documentupload";
import { EventlistPage } from "./../pages/eventlist/eventlist";
import { EmergencycontactlistPage } from "./../pages/emergencycontactlist/emergencycontactlist";
import { HomePage } from "./../pages/home/home";
import { ElectricianlistPage } from "./../pages/electricianlist/electricianlist";
import { DoctorlistPage } from "./../pages/doctorlist/doctorlist";
import { PlumberlistPage } from "./../pages/plumberlist/plumberlist";
import { DosdontsPage } from "./../pages/dosdonts/dosdonts";
import { NewsPage } from "./../pages/news/news";
import { CommitteelistPage } from "./../pages/committeelist/committeelist";
import { ResidentlistPage } from "./../pages/residentlist/residentlist";
import { ProfilePage } from "./../pages/profile/profile";
import { LoginPage } from "./../pages/login/login";
import { SocietybillPage } from "../pages/societybill/societybill";
import { SideMenuSettings } from "./../shared/side-menu-content/side-menu-content.component";
import { ForumPage } from "./../pages/forum/forum";
import { InboxPage } from "./../pages/inbox/inbox";
import { HelpdeskPage } from "./../pages/helpdesk/helpdesk";
import { ImageGalleryPage } from "./../pages/image-gallery/image-gallery";
import { ThreadCreatePage } from "../pages/thread-create/thread-create";
import { ThreadsPage } from "../pages/threads/threads";
import { ConfigCctvPage } from './../pages/config-cctv/config-cctv';


@Component({
  templateUrl: "app.html"
})
export class MySocietyApp {
  rootPage: any = LoginPage;
  username: string;
  password: string;
  status: any;

  user: Observable<firebase.User>;

  @ViewChild(Nav) nav: Nav;

  // Get the instance to call the public methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  pages: Array<{ title: string; component: any; icon: string }>;

  // Options to show in the SideMenuComponent
  public options: Array<MenuOptionModel>;

  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: "my-selected-option",
    subOptionIndentation: {
      md: "56px",
      ios: "64px",
      wp: "56px"
    }
  };

  public backButtonPressedTimer: any;
  public backButtonPressed = false;
  // Unregister when entering other pages. I register another one later somewhere else for different callback.
  public unregisterBackButtonAction: any = null;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    public toastCtrl: ToastController,
    private network: Network,
    // public dataService: DataService,

    public authService: AuthService,
    public events: Events,
    public modalCtrl: ModalController,
    public menu: MenuController,
    private fcm: FCM
  ) {

    this.checkUserLoggedIn();
    this.checkPreviousAuthorization();
    this.initializeApp();

  }

  watchForConnection() {
    var self = this;
    this.network.onConnect().subscribe(() => {
      console.log("network connected!");
      // We just got a connection but we need to wait briefly
      // before we determine the connection type.  Might need to wait
      // prior to doing any api requests as well.
      setTimeout(() => {
        console.log("we got a connection..");
        console.log("Firebase: Go Online..");
        //self.dataService.goOnline();
        self.events.publish("network:connected", true);
      }, 3000);
    });
  }

  signout() {
    var self = this;
    self.menu.close();
    self.authService.signOut();
  }

  isUserLoggedIn(): boolean {
    let user = this.authService.getLoggedInUser();
    return user !== null;
  }
  ngAfterViewInit() {
    var self = this;

    this.authService.onAuthStateChanged(function (user) {
      if (user === null) {
        self.menu.close();
        //self.nav.setRoot(LoginPage);

        let loginodal = self.modalCtrl.create(LoginPage);
        loginodal.present();
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      this.splashScreen.hide();
      this.getStatus();
      // Initialize some options
      this.initializeOptions();

      // this.fcm.subscribeToTopic('all');
      // this.fcm.getToken().then(token => {
      //   // backend.registerToken(token);
      // });
      // this.fcm.onNotification().subscribe(data => {
      //   alert('message received')
      //   if(data.wasTapped) {
      //    console.info("Received in background");
      //   } else {
      //    console.info("Received in foreground");
      //   };
      // });
      // this.fcm.onTokenRefresh().subscribe(token => {
      //   // backend.registerToken(token);
      // });

    });
  }

  getStatus() {
    if ((this.username = "admin")) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  checkPreviousAuthorization(): void {
    if (
      window.sessionStorage.getItem("username") === "undefined" ||
      window.sessionStorage.getItem("username") === null && window.sessionStorage.getItem("isLoggedIn") === "false"
    ) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = HomePage;
    }
  }

  // Check use is logged in
  checkUserLoggedIn() {
    return sessionStorage.getItem("isLoggedIn") ? true : false;
  }
  private initializeOptions(): void {
    this.options = new Array<MenuOptionModel>();

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: "home",
      displayName: "Home",
      component: HomePage,

      // This option is already selected
      selected: true
    });
    // this.options.push({
    //   iconName: "person",
    //   displayName: "User Profile",
    //   component: UserProfilePage
    // });


    this.options.push({
      iconName: "card",
      displayName: "Bill",
      component: SocietybillPage
    });
    this.options.push({
      iconName: "mail",
      displayName: "Inbox",
      component: InboxPage
    });
    // Load options with nested items (with icons)
    // -----------------------------------------------
    this.options.push({
      displayName: "Documents",
      subItems: [
        {
          iconName: "basket",
          displayName: "User Documents",
          component: DocumentuploadPage
        },
        {
          iconName: "bookmark",
          displayName: "Society Documents",
          component: CircularlistPage
        }
      ]
    });
    this.options.push({
      iconName: "desktop",
      displayName: "Configure CCTV",
      component: ConfigCctvPage
    });
    this.options.push({
      iconName: "calendar",
      displayName: "Events",
      component: EventlistPage
    });
    this.options.push({
      iconName: "calendar",
      displayName: "Events Gallery",
      component: ImageGalleryPage
    });
    this.options.push({
      iconName: "medkit",
      displayName: "Emergency Contacts",
      component: EmergencycontactlistPage
    });

    this.options.push({
      iconName: "easel",
      displayName: "News",
      component: NewsPage
    });

    this.options.push({
      iconName: "person",
      displayName: "Profile",
      component: ProfilePage
    });

    this.options.push({
      iconName: "hand",
      displayName: "Rules and Regulation",
      component: DosdontsPage
    });

    this.options.push({
      iconName: "chatbubbles",
      displayName: "Forum",
      component: ThreadsPage
    });

    this.options.push({
      iconName: "help-circle",
      displayName: "Help Desk",
      component: HelpdeskPage
    });

    // Load options with nested items (without icons)
    // -----------------------------------------------
    this.options.push({
      displayName: "Services",
      subItems: [
        {
          iconName: "add-circle",
          displayName: "Doctors",
          component: DoctorlistPage
        },
        {
          iconName: "hammer",
          displayName: "Plumbers",
          component: PlumberlistPage
        },
        {
          iconName: "bookmark",
          displayName: "Electrician",
          component: ElectricianlistPage
        }
      ]
    });

    this.options.push({
      displayName: "Member List",
      subItems: [
        {
          iconName: "people",
          displayName: "Residents",
          component: ResidentlistPage
        },
        {
          iconName: "contacts",
          displayName: "Committee",
          component: CommitteelistPage
        }
      ]
    });

  }
  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isLogin) {
        this.presentAlert("You've clicked the login option!");
      } else if (option.custom && option.custom.isLogout) {
        this.presentAlert("You've clicked the logout option!");
        //this.navCtrl.push(LoginPage);
      } else if (option.custom && option.custom.isExternalLink) {
        let url = option.custom.externalUrl;
        window.open(url, "_blank");
      } else {
        // Redirect to the selected page
        this.nav.setRoot(option.component || EventlistPage, {
          title: option.displayName
        });
      }
    });
  }
  public collapseMenuOptions(): void {
    // Collapse all the options
    this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
      title: "Information",
      message: message,
      buttons: ["Ok"]
    });
    alert.present();
  }
}
