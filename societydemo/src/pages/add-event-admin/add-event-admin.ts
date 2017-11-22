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
  items: { title: string; description: string; icon: string; }[];
  public itemRef: firebase.database.Reference = firebase.database().ref('/users/Id');
  users: AngularFireList<any>;
  authForm: FormGroup;
  eventimg:any;
  eventnm:string;
  eventdt:any;
  eventvenue:string;
  title: string;
  eventownernm :string;
  description: string;
   arrData = [];

   	@ViewChild('enm') eventname;
  @ViewChild('edt') eventdate;
  @ViewChild('evenue') evenue;
  @ViewChild('eventowner') eventowner;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController,private fdb: AngularFireDatabase,public formBuilder: FormBuilder,private fire: AngularFireAuth,private alertCtrl: AlertController) {


    this.users = fdb.list('/events');
    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventvenue: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventownernm: ['', Validators.compose([Validators.required])],
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
    this.itemRef.on('value',itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
    });
  }


  onSubmit(value: any): void {
    alert('nm'+this.eventname.value);
     alert('dt'+this.eventdate.value);
      alert('vnue'+this.evenue.value);
  this.fdb.list("/events/").push({'event_name':this.eventname.value,'event_date':this.eventdate.value,'evenue':this.evenue.value});
        //  console.log('got data ', data);

      this.alert('events added Successfully');
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
