import { RulesPage } from './../pages/rules/rules';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

=======
import { MemberprofilePage } from './../pages/memberprofile/memberprofile';
import { BillingchargesPage } from './../pages/billingcharges/billingcharges';
import { SelectBillPage } from './../pages/select-bill/select-bill';
import { EventlistPage } from './../pages/eventlist/eventlist';
import { EmergencycontactlistPage } from './../pages/emergencycontactlist/emergencycontactlist';
>>>>>>> bae53240fd80e1c17bba7fbe4a998239208e017f

import { DocumentuploadPage } from './../pages/documentupload/documentupload';
import { ElectricianlistPage } from './../pages/electricianlist/electricianlist';
import { SocietybillPage } from './../pages/societybill/societybill';
import { SignupPage } from './../pages/signup/signup';
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
    SignupPage,
    ElectricianlistPage,
    DocumentuploadPage,
    SocietybillPage,
    EventlistPage,
    EmergencycontactlistPage,
    RulesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MySocietyApp),
    AngularFireModule.initializeApp(config)
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
    SignupPage,
    ElectricianlistPage,
    DocumentuploadPage,
    SocietybillPage,
    EventlistPage,
    EmergencycontactlistPage,
    RulesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}
