import { MemberprofilePage } from './../memberprofile/memberprofile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlumberlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumberlist',
  templateUrl: 'plumberlist.html',
})
export class PlumberlistPage {


  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumberlistPage');
     this.items=[
      {name: 'Mr Arun', phoneno: '9874587896'},
      {name: 'Mr Deepak', phoneno: '8521478965'},
      {name: 'Mr Ajit Patel', phoneno: '9645875412'},
      {name: 'Mr Sanket Patil', phoneno: '7854879454'},
       {name: 'Mr. Jayesh', phoneno: '7547547891'},
        {name: 'Mr. Rahul', phoneno: '9125478451'},
    ];
 }

    
viewItem(item){
      this.navCtrl.push(MemberprofilePage, {
        item: item
      });
    }

}
