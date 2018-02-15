import { ShowAlbumPage } from './../show-album/show-album';
import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, ModalController, NavParams, Platform } from "ionic-angular";
import { PhotosPage } from "../photos/photos";
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html"
})
export class ImageGalleryPage {

  public movies: any;
  public albums: any;
  imgsource: any;

  constructor(public navCtrl: NavController, private platform: Platform, private _DB: DatabaseProvider,
    private _LOADER: PreloaderProvider, public navParams: NavParams, private modalCtrl: ModalController, public zone: NgZone)
    {
      this.loadAndParseAlbums();


    }

  gotogallery() {
    this.navCtrl.push(PhotosPage);
  }


  loadAndParseMovies() {
    this.movies = this._DB.renderMovies();
    this._LOADER.hidePreloader();
  }

  loadAndParseAlbums() {
    this.albums = this._DB.renderAlbums();
    //alert(this.albums);
  }

  addAlbum() {
    let modal = this.modalCtrl.create('AddAlbumPage');
    modal.onDidDismiss((data) => {
      if (data) {
        //this.loadAndParseMovies();
        this.loadAndParseAlbums();
      }
    });
    modal.present();
  }

  addRecord() {
    //this.navCtrl.push(ModalsPage);
    let modal = this.modalCtrl.create('ModalpagePage');
    modal.onDidDismiss((data) => {
      if (data) {
        //this.loadAndParseMovies();
        this.loadAndParseAlbums();
      }
    });
    modal.present();
  }

  showAlbum(albumID) {
    this.navCtrl.push(ShowAlbumPage, { AlbumID: albumID });
  }
}
