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
import { RegisterPage } from '../pages/register/register';
import { ViewprofilePage } from '../pages/viewprofile/viewprofile';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MemberprofilePage } from '../pages/memberprofile/memberprofile';
import { AddEventAdminPage } from '../pages/add-event-admin/add-event-admin';
import { EventAdminPage } from '../pages/event-admin/event-admin';
import { CommitteeListAdminPage } from '../pages/committee-list-admin/committee-list-admin';
import { EventListAdminPage } from '../pages/event-list-admin/event-list-admin';
import { ResidentListAdminPage } from '../pages/resident-list-admin/resident-list-admin';
import { AddCircularAdminPage } from '../pages/add-circular-admin/add-circular-admin';
import { EventdetailsPage } from '../pages/eventdetails/eventdetails';
import { AddPropertyAdminPage } from '../pages/add-property-admin/add-property-admin';
import { SocietybillPage } from '../pages/societybill/societybill';
import { BillingchargesPage } from '../pages/billingcharges/billingcharges';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { CommitteeProfileAdminPage } from '../pages/committee-profile-admin/committee-profile-admin';
import { ResidentProfileAdminPage } from '../pages/resident-profile-admin/resident-profile-admin';
import { PropertyListAdminPage } from '../pages/property-list-admin/property-list-admin';
import { CircularListAdminPage } from '../pages/circular-list-admin/circular-list-admin';
import { CommitteeMemberProfilePage } from '../pages/committee-member-profile/committee-member-profile';
import { BillAdminPage } from '../pages/bill-admin/bill-admin';
import { AddAssetsAdminPage } from '../pages/add-assets-admin/add-assets-admin';
import { CircularDetailAdminPage } from '../pages/circular-detail-admin/circular-detail-admin';
import { GenerateBillAdminPage } from '../pages/generate-bill-admin/generate-bill-admin';
import { InboxPage } from '../pages/inbox/inbox';
import { ForumPage } from '../pages/forum/forum';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CirculardetailsPage } from '../pages/circulardetails/circulardetails';
import { CallNumber } from '@ionic-native/call-number';
import { CircularlistPage } from '../pages/circularlist/circularlist';
import { HelpdeskPage } from '../pages/helpdesk/helpdesk';


import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


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
    ElectricianlistPage,
    DocumentuploadPage,
    ViewprofilePage,
    RegisterPage,
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
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
    ForumPage,
    CirculardetailsPage,
    HelpdeskPage

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
    ForgotpasswordPage,
    EventlistPage,
    EmergencycontactlistPage,
    MemberprofilePage,
    CircularlistPage,
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
    ForumPage,
    CirculardetailsPage,
    HelpdeskPage

  ],

  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    File,
    Transfer,
    Camera,
    FilePath,
  ]
})

export class AppModule {}
