import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  postList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteServiceProvider) {
    //this.getPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
//   getPosts(){
//     this.remoteService.getPosts().subscribe((data)=>{
//         this.postList = data;
//     });
//   }
// }
}
