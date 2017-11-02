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
      {title: 'Diwali', description: 'test1',icon:'assets/diwali.jpg'},
      {title: 'Holi', description: 'test2',icon:'assets/holi.jpg'},
      {title: 'Independence day', description: 'test3',icon:'assets/independence day.png'},
      {title: 'Chritmas', description: 'test3',icon:'assets/christmas.png'}
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
    deleteEvent(){
      alert('deleted');
    }
    EditEvent(){
      alert('edited');
    }
}
