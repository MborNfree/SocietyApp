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
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
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
<<<<<<< HEAD
import { CommitteeMemberProfilePage } from './../pages/committee-member-profile/committee-member-profile';
import { CommitteeProfileAdminPage } from './../pages/committee-profile-admin/committee-profile-admin';
import { BillingchargesPage } from './../pages/billingcharges/billingcharges';
import { SocietybillPage } from './../pages/societybill/societybill';
import { EventdetailsPage } from './../pages/eventdetails/eventdetails';


// import { MemberlistPage } from '../pages/memberlist/memberlist';
import { AddEventAdminPage } from '../pages/add-event-admin/add-event-admin';

import { CircularlistPage } from './../pages/circularlist/circularlist';
import { MemberprofilePage } from './../pages/memberprofile/memberprofile';
import { ForgotpasswordPage } from './../pages/forgotpassword/forgotpassword';
import { RegisterPage } from './../pages/register/register';
import { ViewprofilePage } from './../pages/viewprofile/viewprofile';

import { NgDatepickerModule } from 'ng2-datepicker';
import { EventAdminPage } from '../pages/event-admin/event-admin';
import { EventListAdminPage } from '../pages/event-list-admin/event-list-admin';
import { CommitteeListAdminPage } from '../pages/committee-list-admin/committee-list-admin';
import { ResidentListAdminPage } from '../pages/resident-list-admin/resident-list-admin';
import { AddPropertyAdminPage } from '../pages/add-property-admin/add-property-admin';
import { AddCircularAdminPage } from '../pages/add-circular-admin/add-circular-admin';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { PropertyListAdminPage } from '../pages/property-list-admin/property-list-admin';
import { ResidentProfileAdminPage } from '../pages/resident-profile-admin/resident-profile-admin';
import { CircularListAdminPage } from '../pages/circular-list-admin/circular-list-admin';
import { CallNumber } from '@ionic-native/call-number';
import { CircularDetailAdminPage } from '../pages/circular-detail-admin/circular-detail-admin';
import { BillAdminPage } from '../pages/bill-admin/bill-admin';
import { GenerateBillAdminPage } from '../pages/generate-bill-admin/generate-bill-admin';
import { AddAssetsAdminPage } from '../pages/add-assets-admin/add-assets-admin';
import { InboxPage } from '../pages/inbox/inbox';
import { AddServiceAdminPage } from '../pages/add-service-admin/add-service-admin';
import { AddFlatwiseServiceAdminPage } from '../pages/add-flatwise-service-admin/add-flatwise-service-admin';
import { AddemergencyAdminPage } from '../pages/addemergency-admin/addemergency-admin';
import { EmergencyListAdminPage } from '../pages/emergency-list-admin/emergency-list-admin';
import { ServiceListAdminPage } from '../pages/service-list-admin/service-list-admin';
import { ServiceDetailAdminPage } from '../pages/service-detail-admin/service-detail-admin';
=======
import { MemberlistPage } from '../pages/memberlist/memberlist';
>>>>>>> d3a327038965276cd50a7cb0b7394abf8f0b7870


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
<<<<<<< HEAD
    AddServiceAdminPage,
    AddFlatwiseServiceAdminPage,
    AddemergencyAdminPage,
    EmergencyListAdminPage,
    ServiceListAdminPage,
    ServiceDetailAdminPage
=======
>>>>>>> d3a327038965276cd50a7cb0b7394abf8f0b7870
=======
    ForumPage


=======
>>>>>>> ee7ce2f1bf2d8afa3bb3194641304c617afcba92
>>>>>>> origin/master

  ],

  imports: [
    BrowserModule,
    NgDatepickerModule,
    IonicModule.forRoot(MySocietyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
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
<<<<<<< HEAD
    AddServiceAdminPage,
    AddFlatwiseServiceAdminPage,
    AddemergencyAdminPage,
    EmergencyListAdminPage,
    ServiceListAdminPage,
    ServiceDetailAdminPage
=======
    ForumPage
>>>>>>> origin/master
=======
    CirculardetailsPage


<<<<<<< HEAD
>>>>>>> d3a327038965276cd50a7cb0b7394abf8f0b7870
=======
>>>>>>> ee7ce2f1bf2d8afa3bb3194641304c617afcba92
>>>>>>> origin/master
  ],

  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,

  ]
})

export class AppModule {}
