import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { EventAdminPage } from '../event-admin/event-admin';
import { AddEventAdminPage } from '../add-event-admin/add-event-admin';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

/**
 * Generated class for the EventListAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list-admin',
  templateUrl: 'event-list-admin.html',
})
export class EventListAdminPage {

  //public items;
  events = [];
  arrData = [];
 public items = [];

  constructor(public http:Http,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, private fdb: AngularFireDatabase, public navParams: NavParams, public modalCtrl: ModalController,public alertCtrl: AlertController) {
    this.fdb.list("/events/").valueChanges().subscribe(_data => {
      this.events = _data;
     console.log(this.events);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListAdminPage');
    this.items = [
      {title: 'Diwali', description: 'test1',icon:'assets/diwali.jpg'},
      {title: 'Holi', description: 'test2',icon:'assets/holi.jpg'},
      {title: 'Independence day', description: 'test3',icon:'assets/independence day.png'},
      {title: 'Chritmas', description: 'test3',icon:'assets/christmas.png'}
    ];
  }

  EventDetailPage(){
    this.navCtrl.push(EventAdminPage);
  }
  showOptions(EventId, EventTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Song',
          role: 'destructive',
          handler: () => {
            this.removeEvent(EventId);
          }
        },{
          text: 'Update title',
          handler: () => {
            this.updateEvent(Event);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  removeEvent(eventId: string){

    alert('eventid'+eventId);
    this.fdb.object(`events/${eventId}`)
    .remove()
    .then(() => alert('events deletion requested !'));
   // this.events.remove(events);
    //this.fdb.object('/events/'+ eventId).remove();
  }
  updateEvent(Event:any){
    console.log(Event);
    this.fdb.object('/events/' + Event.EventId)
    .update({ event_name: Event.EventTitle});
    // let prompt = this.alertCtrl.create({
    //   title: 'Song Name',
    //   message: "Update the name for this song",
    //   inputs: [
    //     {
    //       name: 'title',
    //       placeholder: 'Title',
    //       value: EventTitle
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Save',
    //       handler: data => {
    //         this.events.update(EventId, {
    //           title: data.title
    //         });
    //       }
    //     }
    //   ]
    // });
  // prompt.present();
  }


  addItem(){
       let addModal = this.modalCtrl.create(AddEventAdminPage);
       addModal.onDidDismiss((item) => {
             if(item){
               this.saveItem(item);
             }

       });
       addModal.present();
     }

     saveItem(item){
       this.items.push(item);
     }

    viewItem(item){
      this.navCtrl.push(EventAdminPage, {
        item: item
      });
    }

}
