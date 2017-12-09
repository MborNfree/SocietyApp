import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';

import { EventListAdminPage } from '../event-list-admin/event-list-admin';
import { EventAdminPage } from '../event-admin/event-admin';


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
  eventtype:number;
  title: string;
  eventownernm :string;
  description: string;
  arrData = [];

  @ViewChild('enm') event_name;
  @ViewChild('edt') event_date;
  @ViewChild('evedesc') event_desc;
  @ViewChild('eventowner') event_owner;
  @ViewChild('eventype') event_type;

  public EventCat: Array<any> = [];
  public EventCatRef: firebase.database.Reference = firebase.database().ref('/service_category/');


  public owner: AngularFireList<any>;
  public type: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController,private fdb: AngularFireDatabase,public formBuilder: FormBuilder,private fire: AngularFireAuth,private alertCtrl: AlertController) {
    this.users = fdb.list('/events');
    this.authForm = formBuilder.group({
      eventnm: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
      eventdt: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      eventdesc: ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*'), Validators.minLength(4)])],
      eventownernm: ['', Validators.compose([Validators.required])],
      eventtype : ['', Validators.compose([Validators.required])],
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
    this.EventCatRef.on('value',itemSnapshot => {
      this.EventCat = [];
      itemSnapshot.forEach(itemSnap => {
        this.EventCat.push(itemSnap.val());
        return false;
      });
    });
  }


  onSubmit(value: any): void {

    alert('nm'+this.event_name.value);
    alert('dt'+this.event_date.value);
    alert('desc'+this.event_desc.value);

      this.fdb.list("/events/").push({'event_name':this.event_name.value,'event_date':this.event_date.value,'event_desc':this.event_desc.value,'ID':this.event_owner.value,'event_type':this.event_type.value});
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

     pickOwner(owner: string){
      this.owner = this.fdb.list('users',
        ref => ref.orderByChild('eyeColor').equalTo(owner));
    }
    pickType(type: string){
      this.type = this.fdb.list('service_category',
        ref => ref.orderByChild('eyeColor').equalTo(type));
    }

}
