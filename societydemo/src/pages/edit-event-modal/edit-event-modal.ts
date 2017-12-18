import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-edit-event-modal',
  templateUrl: 'edit-event-modal.html',
})
export class EditEventModalPage {
  data: string;
  dataEvent = {
    "name": "",
    "venue": "",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl : ViewController,  private fdb: AngularFireDatabase) {
    this.data = JSON.stringify(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventModalPage');
  }
   updateItem(nm: string, venue: string) {
    this.data = JSON.stringify(this.navParams.get('data'));
    console.log( this.data );
  //  this.itemsRef.update(key, { text: newText });
  // alert(nm);
  //   this.fdb
  //   .list("/events/").update(this.data[key], { event_name: nm });
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
