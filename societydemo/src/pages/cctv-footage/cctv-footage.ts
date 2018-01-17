import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
// import { StreamingMedia } from 'ionic-native';
/**
 * Generated class for the CctvFootagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cctv-footage',
  templateUrl: 'cctv-footage.html',
})
export class CctvFootagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia) {
  }

  StartVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };

     // http://www.sample-videos.com/
     this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4',options); 

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad CctvFootagePage');
  }

}
