<<<<<<< HEAD
import { ForumPage } from './../pages/forum/forum';
=======
import { MemberprofilePage } from './../pages/memberprofile/memberprofile';
import { ForgotpasswordPage } from './../pages/forgotpassword/forgotpassword';
import { RegisterPage } from './../pages/register/register';
import { ViewprofilePage } from './../pages/viewprofile/viewprofile';
>>>>>>> ee7ce2f1bf2d8afa3bb3194641304c617afcba92

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EmojiProvider } from '../providers/emoji';
// Angular Material
import {  MatToolbarModule, MatSidenavModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule } from '@angular/material';


import { DocumentuploadPage } from './../pages/documentupload/documentupload';
import { ElectricianlistPage } from './../pages/electricianlist/electricianlist';
import { PlumberlistPage } from './../pages/plumberlist/plumberlist';
import { DoctorlistPage } from './../pages/doctorlist/doctorlist';
import { DosdontsPage } from './../pages/dosdonts/dosdonts';
import { EventlistPage } from './../pages/eventlist/eventlist';
import { EmergencycontactlistPage } from './../pages/emergencycontactlist/emergencycontactlist';
import { CommitteelistPage } from './../pages/committeelist/committeelist';
import { ResidentlistPage } from './../pages/residentlist/residentlist';
import { NewsPage } from './../pages/news/news';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';
import { MySocietyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MemberlistPage } from '../pages/memberlist/memberlist';


var config = {
  apiKey: "AIzaSyCdBaGl6H_IuyzMyEnjq-6VRD5-2alxUtg",
  authDomain: "society-182906.firebaseapp.com",
  databaseURL: "https://society-182906.firebaseio.com",
  projectId: "society-182906",
  storageBucket: "society-182906.appspot.com",
  messagingSenderId: "583609948893"
};
 firebase.initializeApp(config);

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
    RegisterPage,
    ElectricianlistPage,
    DocumentuploadPage,
    ViewprofilePage,
    RegisterPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
<<<<<<< HEAD
    CircularlistPage,
    AddEventAdminPage,
    EventAdminPage,
    EventListAdminPage,
    CommitteeListAdminPage,
    ResidentListAdminPage,
    AddCircularAdminPage,
    AddPropertyAdminPage,
    EventdetailsPage,
    SocietybillPage,
    BillingchargesPage,
    // Side menu custom component
    SideMenuContentComponent,
    CircularListAdminPage,
    PropertyListAdminPage,
    ResidentProfileAdminPage,
    CommitteeProfileAdminPage,
    CommitteeMemberProfilePage,
    CircularDetailAdminPage,
    BillAdminPage,
    GenerateBillAdminPage,
    AddAssetsAdminPage,
    InboxPage,
    ForumPage


=======
>>>>>>> ee7ce2f1bf2d8afa3bb3194641304c617afcba92

  ],

  imports: [
    BrowserModule,
    NgDatepickerModule,
    IonicModule.forRoot(MySocietyApp),
    AngularFireModule.initializeApp(config),
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    Ng2SmartTableModule
  ],
    bootstrap: [IonicApp],
  entryComponents: [
    MySocietyApp,
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
    ViewprofilePage,
    RegisterPage,
    MemberlistPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    CircularlistPage,
<<<<<<< HEAD
    AddEventAdminPage,
    EventAdminPage,
    EventListAdminPage,
    CommitteeListAdminPage,
    ResidentListAdminPage,
    AddCircularAdminPage,
    AddPropertyAdminPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    CircularlistPage,
    EventdetailsPage,
    SocietybillPage,
    BillingchargesPage,
    PropertyListAdminPage,
    ResidentProfileAdminPage,
    CommitteeListAdminPage,
    CommitteeProfileAdminPage,
    CircularListAdminPage,
    CommitteeMemberProfilePage,
    CircularDetailAdminPage,
    BillAdminPage,
    GenerateBillAdminPage,
    AddAssetsAdminPage,
    InboxPage,
    ForumPage
=======
    CirculardetailsPage


>>>>>>> ee7ce2f1bf2d8afa3bb3194641304c617afcba92
  ],

  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider
  ]
})

export class AppModule {}
