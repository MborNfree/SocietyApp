import { CirculardetailsPage } from './../circulardetails/circulardetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the CircularlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-circularlist',
  templateUrl: 'circularlist.html',
})
export class CircularlistPage {

   public items = [];
   public Circular = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

    this.fdb.list("/documents/").valueChanges().subscribe(_data => {
      this.Circular = _data;
     console.log(this.Circular);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CircularlistPage');
     this.items = [
      {title: ' Circular 1', description: ' To give permission for registering society within Co-operative Housing Societies.',icon:'assets/doctor.jpg'},
      {title: ' Circular 2', description: ' Circular On Housing Society Management',icon:'assets/holi.jpg'},
      {title: ' Circular 3', description: ' Circular On Housing Society Management',icon:'assets/independence day.png'},
      {title: ' Circular 4', description: ' Circular On Housing Society Management',icon:'assets/christmas.png'}
    ];
  }

   saveItem(item){
       this.items.push(item);
     }
     viewItem(){
       this.navCtrl.push(CirculardetailsPage);
    }

    removeCircular(eventId: string){
      alert(eventId);
         // this.events.remove(events);
          this.fdb.object('/documents/' + eventId).remove();
        }

        updateCircular(EventId, EventTitle){
          this.fdb.object('/documents/' + EventId)
          .update({ event_name: EventTitle});

        }

}
