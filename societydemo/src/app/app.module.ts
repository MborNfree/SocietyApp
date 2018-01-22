
// Dependency

import { StreamingMedia } from '@ionic-native/streaming-media';
import { EmailComposer } from "@ionic-native/email-composer";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { EmojiProvider } from "../providers/emoji";
import { FilePath } from "@ionic-native/file-path";
import { File } from "@ionic-native/file";
import { FileChooser } from "@ionic-native/file-chooser";
import { Camera } from "@ionic-native/camera";
import { Transfer, TransferObject } from "@ionic-native/transfer";
import { Printer } from "@ionic-native/printer";
import { HttpModule } from "@angular/http";
import { SMS } from "@ionic-native/sms";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UniqueDeviceID } from '@ionic-native/unique-device-id';
// import { FCM } from '@ionic-native/fcm';
// import { FCM } from '@ionic-native/fcm';
// import * as $ from "jquery";
import { APP_BASE_HREF } from "@angular/common";

//pages
import { DocumentuploadPage } from "./../pages/documentupload/documentupload";
import { ElectricianlistPage } from "./../pages/electricianlist/electricianlist";
import { PlumberlistPage } from "./../pages/plumberlist/plumberlist";
import { DoctorlistPage } from "./../pages/doctorlist/doctorlist";
import { DosdontsPage } from "./../pages/dosdonts/dosdonts";
import { EventlistPage } from "./../pages/eventlist/eventlist";
import { EmergencycontactlistPage } from "./../pages/emergencycontactlist/emergencycontactlist";
import { CommitteelistPage } from "./../pages/committeelist/committeelist";
import { ResidentlistPage } from "./../pages/residentlist/residentlist";
import { NewsPage } from "./../pages/news/news";
import { ProfilePage } from "./../pages/profile/profile";
import { LoginPage } from "./../pages/login/login";
import { MySocietyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { RegisterPage } from "../pages/register/register";
import { ForgotpasswordPage } from "../pages/forgotpassword/forgotpassword";
import { MemberprofilePage } from "../pages/memberprofile/memberprofile";
import { EventdetailsPage } from "../pages/eventdetails/eventdetails";
import { SocietybillPage } from "../pages/societybill/societybill";
import { BillingchargesPage } from "../pages/billingcharges/billingcharges";
import { SideMenuContentComponent } from "../shared/side-menu-content/side-menu-content.component";
import { CommitteeMemberProfilePage } from "../pages/committee-member-profile/committee-member-profile";
import { InboxPage } from "../pages/inbox/inbox";
import { ForumPage } from "../pages/forum/forum";
import { NgDatepickerModule } from "ng2-datepicker";
import { CirculardetailsPage } from "../pages/circulardetails/circulardetails";
import { CallNumber } from "@ionic-native/call-number";
import { CircularlistPage } from "../pages/circularlist/circularlist";
import { RemoteServiceProvider } from "../providers/remote-service/remote-service";
import { ForumviewquestionPage } from "../pages/forumviewquestion/forumviewquestion";
import { HelpdeskPage } from "../pages/helpdesk/helpdesk";
import { ForumquestionPage } from "../pages/forumquestion/forumquestion";
import { ProfileProvider } from "../providers/profile/profile";
import { BalancesheetPage } from "./../pages/balancesheet/balancesheet";
import { ViewbillPage } from "./../pages/viewbill/viewbill";
import { Card } from "../pages/card/card";
import { EventDataProvider } from "../providers/event-data/event-data";
import { ThreadCommentsPage } from "../pages/thread-comments/thread-comments";
import { ThreadCreatePage } from "../pages/thread-create/thread-create";
import { ThreadsPage } from "../pages/threads/threads";
import { CommentCreatePage } from "../pages/comment-create/comment-create";
import { AboutPage } from "../pages/about/about";

import { ConfigCctvPage } from '../pages/config-cctv/config-cctv';

import { ServiceDetailPage } from '../pages/service-detail/service-detail';
// Custom components
import { ThreadComponent } from "../shared/components/thread.component";
// import { UserAvatarComponent } from "../shared/components/user-avatar.component";

// providers
import { APP_PROVIDERS } from "../providers/app.providers";
import { DatabaseProvider } from '../providers/database/database';
import { ImageProvider } from '../providers/image/image';
import { PreloaderProvider } from '../providers/preloader/preloader';


var config = {
  apiKey: "AIzaSyCdBaGl6H_IuyzMyEnjq-6VRD5-2alxUtg",
  authDomain: "society-182906.firebaseapp.com",
  databaseURL: "https://society-182906.firebaseio.com",
  projectId: "society-182906",
  storageBucket: "society-182906.appspot.com",
  messagingSenderId: "583609948893"
};

@NgModule({
  declarations: [
    MySocietyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResidentlistPage,
    NewsPage,
    CommitteelistPage,
    DoctorlistPage,
    DosdontsPage,
    PlumberlistPage,
    ElectricianlistPage,
    DocumentuploadPage,
    RegisterPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    CircularlistPage,
    EventdetailsPage,
    SocietybillPage,
    BillingchargesPage,
    // Side menu custom component
    SideMenuContentComponent,
    CommitteeMemberProfilePage,
    InboxPage,
    ForumPage,
    CirculardetailsPage,
    ForumquestionPage,
    HelpdeskPage,
    ForumviewquestionPage,
    ViewbillPage,
    BalancesheetPage,
    Card,
    ThreadCommentsPage,
    ThreadCreatePage,
    ThreadsPage,
    ThreadComponent,
    AboutPage,
    CommentCreatePage,
    ConfigCctvPage,
    ServiceDetailPage,
   
  ],

  imports: [
    HttpModule,
    BrowserModule,
    NgDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MySocietyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    LoginPage,
    ResidentlistPage,
    ProfilePage,
    NewsPage,
    CommitteelistPage,
    DoctorlistPage,
    DosdontsPage,
    PlumberlistPage,
    RegisterPage,
    ElectricianlistPage,
    DocumentuploadPage,
    RegisterPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    CircularlistPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    EventdetailsPage,
    SocietybillPage,
    BillingchargesPage,
    CommitteeMemberProfilePage,
    InboxPage,
    ForumPage,
    CirculardetailsPage,
    ForumquestionPage,
    HelpdeskPage,
    ForumviewquestionPage,
    ViewbillPage,
    BalancesheetPage,
    Card,
    ThreadCommentsPage,
    ThreadCreatePage,
    ThreadsPage,
    ThreadComponent,
    AboutPage,
    CommentCreatePage,
    ConfigCctvPage,
    ServiceDetailPage,
  
  ],

  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EmojiProvider,
    File,
    Transfer,
    Camera,
    FilePath,
    FileChooser,
    TransferObject,
    // FileUploadOptions,
    RemoteServiceProvider,
    InAppBrowser,
    Printer,
    ProfileProvider,
    SMS,
    EmailComposer,
    EventDataProvider,
    StreamingMedia,
    
    APP_PROVIDERS,
    { provide: APP_BASE_HREF, useValue: "/" },
    StreamingMedia,
    UniqueDeviceID,
    DatabaseProvider,
    ImageProvider,
    PreloaderProvider,
   

  ]
})
export class AppModule { }
