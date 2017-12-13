import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { EventAdminPage } from "../event-admin/event-admin";
import { AddEventAdminPage } from "../add-event-admin/add-event-admin";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";
import * as firebase from "firebase";

@IonicPage()
@Component({
  selector: "page-event-list-admin",
  templateUrl: "event-list-admin.html"
})
export class EventListAdminPage {
  //public items;
  events = [];
  arrData = [];
  public items = [];
  enm:string;
  key:any;


  constructor(
    public http: Http,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    private fdb: AngularFireDatabase,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
    this.fdb
      .list("/events/")
      .valueChanges()
      .subscribe(_data => {
        this.events = _data;
        console.log(this.events);
      });
    var ref = firebase.database().ref("events");
    var ref1 = firebase.database().ref();
    ref.on("value", this.gotEvent, this.errEvent);

    var  applesQuery = ref1.child("events").orderByChild("event_name").equalTo("birthday");
    console.log('apple'+applesQuery);
    // console.log(applesQuery[event_name]);
  }

  gotEvent(data) {
    console.log("data");
    // console.log(data.val());
    var events = data.val();
    var keys = Object.keys(events);
    // console.log('keys'+keys);
    var i;
    for (i = 0; i < keys.length; i++) {
      var k = keys[i];

      console.log("true");
       var enm = events[k].event_name;
       var key = k;

      console.log("user data =" + enm, key);
    }
  }
  errEvent(err) {
    console.log("Error");
    console.log(err);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad EventListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  EventDetailPage() {
    this.navCtrl.push(EventAdminPage);
  }
  showOptions(EventId, EventTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: "What do you want to do?",
      buttons: [
        {
          text: "Delete Song",
          role: "destructive",
          handler: () => {
            this.removeEvent(EventId);
          }
        },
        {
          text: "Update title",
          handler: () => {
            this.updateEvent(Event);
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeEvent(eventId: any) {
    alert(eventId);
    alert("eventid" + JSON.stringify(eventId.E_id));
    alert('key'+eventId.$key);
    this.fdb
      .object(`events/${eventId.E_id}`)
      .remove()
      .then(() => alert("events deletion requested !"));
    // this.events.remove(events);
    //this.fdb.object('/events/'+ eventId).remove();
  }
  updateEvent(Event: any) {
    console.log(Event);
    this.fdb
      .object("/events/" + Event.EventId)
      .update({ event_name: Event.EventTitle });
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddEventAdminPage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {
    this.navCtrl.push(EventAdminPage, {
      item: item
    });
  }
}
