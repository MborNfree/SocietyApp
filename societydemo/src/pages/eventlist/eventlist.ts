import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var test;
@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
    test.thisistestfunction();
  }


  ionViewDidLoad() {
      
    console.log('ionViewDidLoad EventlistPage');
  }

  




    

    

}
