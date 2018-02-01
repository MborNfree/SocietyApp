import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-album',
  templateUrl: 'add-album.html',
})
export class AddAlbumPage {

  public authForm: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public params: NavParams,
              private _FB: FormBuilder,
              private _IMG: ImageProvider,
              public viewCtrl: ViewController,
              private _LOADER: PreloaderProvider,
              private _DB: DatabaseProvider) {

    this.authForm = _FB.group({
    'albumName': ['', Validators.required]
    });
  }

  closeModal(val = null) {
    this.viewCtrl.dismiss(val);
  }

  saveClick()
  {
    this._LOADER.displayPreloader();
    let albumName: string = this.authForm.controls["albumName"].value;
    this.save(albumName);
  }

  save(AlbumName)
  {
    this._DB.addAlbumToDatabase({
      albumName: AlbumName
    })
      .then((data) => {
        this._LOADER.hidePreloader();
      });
      this.closeModal(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAlbumPage');
  }

}
