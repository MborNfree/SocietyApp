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
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Http } from "@angular/http";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: "page-event-list-admin",
  templateUrl: "event-list-admin.html"
})
export class EventListAdminPage {
  itemsRef: AngularFireList<any>;
  events1: Observable<any[]>;
  events = [];
  arrData = [];
  public items = [];
  enm: string;
  key: any;

  constructor(
    public http: Http,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    private fdb: AngularFireDatabase,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
    this.events1 = this.fdb
      .list("/events/")
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

    var ref1 = firebase.database().ref();
    var ref = firebase.database().ref("events");
    ref.on("value", this.gotEvent, this.errEvent);
  }

  gotEvent(data) {
    console.log("data");
    var events = data.val();
    var keys = Object.keys(events);
    // console.log('keys'+keys);
    var i;
    for (i = 0; i < keys.length; i++) {
      var k = keys[i];

      console.log("true");
      var enm = events[k].event_name;
      var key = k;
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
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }
  EventDetailPage() {
    this.navCtrl.push(EventAdminPage);
  }

  updateItem(key: string, newText: string) {
    var data = { key: key, newText: newText };
    alert(JSON.stringify(data));
    var modalPage = this.modalCtrl.create("EditEventModalPage", { data: data });
    modalPage.present();
  }

  // updateItem(key: string, newText: string) {
  // //  this.itemsRef.update(key, { text: newText });
  // alert(newText);
  //   this.fdb
  //   .list("/events/").update(key, { event_name: newText });
  // }
  deleteItem(key: string) {
    //  this.itemsRef.remove(key);
    alert('Are you sure wated to Delete?');
    this.fdb.list("/events/").remove(key);
  }
  deleteEverything() {
    // this.itemsRef.remove();
    this.fdb.list("/events/").remove();
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
