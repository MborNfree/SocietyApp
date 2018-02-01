import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-show-album',
  templateUrl: 'show-album.html',
})
export class ShowAlbumPage {

  public albumID: any;
  public movies: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public params: NavParams,
              private _FB: FormBuilder,
              private _IMG: ImageProvider,
              public viewCtrl: ViewController,
              private _LOADER: PreloaderProvider,
              private _DB: DatabaseProvider) {

    this.albumID = navParams.get('AlbumID');
    console.log("Album ID: ",this.albumID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAlbumPage');

    let ref = firebase.database().ref('films');
    ref.orderByChild("album").equalTo(this.albumID).once("value", (items : any) => {
      console.log(items.key);
      console.log(items.val());

      let films : any = [];
      
      //let items = [];
      //items = snapshot.val();
      
      items.forEach((item) =>
      {
        films.push({
	        id        : item.key,
	        actors    : item.val().actors,
	        date      : item.val().date,
	        duration  : item.val().duration,
	        genres    : item.val().genres,
	        image     : item.val().image,
	        rating    : item.val().rating,
	        summary   : item.val().summary,
          title     : item.val().title,
          album     : item.val().album
	      });
      });
      console.log("Films: ",films);
      this.movies = films;
    });
  }
}
