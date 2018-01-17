
// import {firebase} from 'firebase';
import * as firebase from "firebase/app";
import { Component, ViewChild } from "@angular/core";
import {
  Nav,
  Platform,
  MenuController,
  AlertController,
  Events,
  ModalController
} from "ionic-angular";
import { Network } from "ionic-native";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../shared/services/auth.service";
// import { DataService } from "../shared/services/data.service";

// import { Push, PushObject, PushOptions } from '@ionic-native/push';

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
  items: AngularFireList<any[]>;
  msgVal: string = "";

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

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    // public dataService: DataService,
   
    public authService: AuthService,
    public events: Events,
    public modalCtrl: ModalController,
    public menu: MenuController
  ) {
    this.user = this.afAuth.authState;

    this.initializeApp();
  }

  watchForConnection() {
    var self = this;
    Network.onConnect().subscribe(() => {
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

  // watchForDisconnect() {
  //   var self = this;
  //   // watch network for a disconnect
  //   Network.onDisconnect().subscribe(() => {
  //     console.log("network was disconnected :-(");
  //     console.log("Firebase: Go Offline..");
  //     //self.sqliteService.resetDatabase();
  //     self.dataService.goOffline();
  //     self.events.publish("network:connected", false);
  //   });
  // }

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

    this.authService.onAuthStateChanged(function(user) {
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
      // this.watchForConnection();
      // this.watchForDisconnect();
      this.splashScreen.hide();
      this.getStatus();
      // Initialize some options
      this.initializeOptions();

      // // pushsetup
      // this.pushsetup();
    });
  }

  // //method  for pushsetup
  // pushsetup() {
  //   const options: PushOptions = {
  //    android: {
  //        senderID: '583609948893'
  //    },
  //    ios: {
  //        alert: 'true',
  //        badge: true,
  //        sound: 'false'
  //    },
  //    windows: {}
  // };
 
  // const pushObject: PushObject = this.push.init(options);
 
  // pushObject.on('notification').subscribe((notification: any) => {
  //   if (notification.additionalData.foreground) {
  //     let youralert = this.alertCtrl.create({
  //       title: 'New Push notification',
  //       message: notification.message
  //     });
  //     youralert.present();
  //   }
  // });
 
  // pushObject.on('registration').subscribe((registration: any) => {
  //    //do whatever you want with the registration ID
  // });
 
  // pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  // }
 
  // //////////////END METHOD ///////
  
    





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
      window.sessionStorage.getItem("username") === null
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
      iconName: "tv",
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
      component: ForumPage
    });

    this.options.push({
      iconName: "chatbubbles",
      displayName: "Threads",
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
    // this.options.push({
    //   displayName: "Admin Section",
    //   subItems: [
    //     {
    //       iconName: "basket",
    //       displayName: "User Documents",
    //       component: UserDocumentListAdminPage
    //     },
    //     {
    //       iconName: "clipboard",
    //       displayName: "Circualrs",
    //       component: CircularListAdminPage
    //     },
    //     {
    //       iconName: "folder",
    //       displayName: "Add Circualrs",
    //       component: AddCircularAdminPage
    //     },
    //     {
    //       iconName: "calendar",
    //       displayName: "Add Events",
    //       component: AddEventAdminPage
    //     },
    //     {
    //       iconName: "calendar",
    //       displayName: "Events List",
    //       component: EventListAdminPage
    //     },
    //     // {
    //     //   iconName: "people",
    //     //   displayName: "Residents List",
    //     //   component: ResidentListAdminPage
    //     // },
    //     // {
    //     //   iconName: "contacts",
    //     //   displayName: "Committee List",
    //     //   component: CommitteeListAdminPage
    //     // },
    //     {
    //       iconName: "albums",
    //       displayName: "Society Property",
    //       component: PropertyListAdminPage
    //     },
    //     {
    //       iconName: "albums",
    //       displayName: "Add Society Property",
    //       component: AddPropertyAdminPage
    //     },
    //     {
    //       iconName: "albums",
    //       displayName: "Add Society Assets",
    //       component: AddAssetsAdminPage
    //     },
    //     {
    //       iconName: "cash",
    //       displayName: "Generate Bill",
    //       component: GenerateBillAdminPage
    //     },
    //     {
    //       iconName: "bowtie",
    //       displayName: "Add Service Type",
    //       component: AddServiceCategoryAdminPage
    //     },
    //     {
    //       iconName: "bowtie",
    //       displayName: "Add Service",
    //       component: AddServiceAdminPage
    //     },
    //     {
    //       iconName: "happy",
    //       displayName: "Add Flatwise Service",
    //       component: AddFlatwiseServiceAdminPage
    //     },
    //     {
    //       iconName: "happy",
    //       displayName: "Flatwise Service",
    //       component: FlatwiseServiceListAdminPage
    //     },
    //     {
    //       iconName: "albums",
    //       displayName: "Add Emergency Category",
    //       component: AddEmergencyCategoryAdminPage
    //     },
    //     {
    //       iconName: "albums",
    //       displayName: "Add Emergency",
    //       component: AddemergencyAdminPage
    //     },
    //     {
    //       iconName: "medkit",
    //       displayName: "Emergency List",
    //       component: EmergencyListAdminPage
    //     },
    //     {
    //       iconName: "albums",
    //       displayName: "Service List",
    //       component: ServiceListAdminPage
    //     },
    //     {
    //       iconName: "hand",
    //       displayName: "Add Rules",
    //       component: AddNormsPage
    //     }
    //   ]
    // });
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
