import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EventAdminPage } from '../event-admin/event-admin';
import { AddEventAdminPage } from '../add-event-admin/add-event-admin';

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
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListAdminPage');
    this.items = [
      {title: 'hi1', description: 'test1'},
      {title: 'hi2', description: 'test2'},
      {title: 'hi3', description: 'test3'},
      {title: 'hi4', description: 'test3'}
    ];
  }

  EventDetailPage(){
    this.navCtrl.push(EventAdminPage);
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
