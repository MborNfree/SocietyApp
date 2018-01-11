import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
/**
 * Generated class for the ConfigCctvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-cctv',
  templateUrl: 'config-cctv.html',
})
export class ConfigCctvPage {
  cctvConfig = { "url": "" };
  CCtvurl :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigCctvPage');
  }
  CctvConfig(url){
    alert(url);
    this.CCtvurl = url;
    this.startVideo(this.CCtvurl);
  }

  startVideo(url) {
    alert(url);
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };

    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(url, options);
  }

  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };

    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  }

  stopAudio() {
    this.streamingMedia.stopAudio();
  }
}
