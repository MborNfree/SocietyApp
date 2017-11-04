import { ForumPage } from './../forum/forum';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ForumviewquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forumviewquestion',
  templateUrl: 'forumviewquestion.html',
})
export class ForumviewquestionPage {



  constructor(public navCtrl: NavController,
              public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumviewquestionPage');
  }

}
