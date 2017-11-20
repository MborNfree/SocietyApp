import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { EventListAdminPage } from '../event-list-admin/event-list-admin';
import { EventAdminPage } from '../event-admin/event-admin';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-event-admin',
  templateUrl: 'add-event-admin.html',
})
export class AddEventAdminPage {

  users: AngularFireList<any>;
  authForm: FormGroup;
  eventimg:any;
  eventnm:string;
  eventdt:any;
  eventvenue:string;
  title: string;
  description: string;
   arrData = [];

   	@ViewChild('enm') eventname;
  @ViewChild('edt') eventdate;
  @ViewChild('evenue') evenue;
  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController,private fdb: AngularFireDatabase,public formBuilder: FormBuilder,private fire: AngularFireAuth,private alertCtrl: AlertController) {



    this.users = fdb.list('/Event');
    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventvenue: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventimg: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
     });
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Add!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventAdminPage');
  }


<<<<<<< HEAD
    // AddEvent(){


=======
    // AddEvent(){     
>>>>>>> 9ac7c01a92188028b70bca4abc3d87d774a224ef
    //     this.fdb.list("/addevent/").push({'enm':this.eventname.value,'edt':this.eventdt.value,'evenue':this.evenue.value});
    //     //  console.log('got data ', data);
    //   this.alert('Registered!');
<<<<<<< HEAD
    //   this.navCtrl.push(EventListAdminPage);


=======
    //   this.navCtrl.push(EventListAdminPage);    
>>>>>>> 9ac7c01a92188028b70bca4abc3d87d774a224ef
    // }




  onSubmit(value: any): void {
    alert('nm'+this.eventname.value);
     alert('dt'+this.eventdate.value);
      alert('vnue'+this.evenue.value);
  this.fdb.list("/Events/").push({'enm':this.eventname.value,'edt':this.eventdate.value,'evenue':this.evenue.value});
        //  console.log('got data ', data);

      this.alert('Registered!');
      this.navCtrl.push(EventListAdminPage);
      alert('added');

    this.navCtrl.push(EventListAdminPage);

  }

  saveItem(){
    console.log('save');
       let newItem = {
         title: this.title,
         description: this.description
       };

       this.view.dismiss(newItem);
       this.navCtrl.push(EventAdminPage);

     }

     close(){
       this.view.dismiss();
     }

}
