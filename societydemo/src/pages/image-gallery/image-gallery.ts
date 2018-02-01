import { ShowAlbumPage } from './../show-album/show-album';
import { Component,NgZone } from "@angular/core";
import { IonicPage, NavController,ModalController, NavParams, Platform } from "ionic-angular";
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
  private email: string = 'tejaswi@gmail.com';
  private pass: string = 'tejaswi@123';
  imgsource: any;
  items = [
    // {title:"Nature"},
    // {title:"Holi"},
    // {title:"Nature"},
    // {title:"Nature"}
    // "holi.jpg",
    // "independence day.png",
    // "Party-Poppers-icon.png",
    // "diwali.jpg"
  ];
  constructor(public navCtrl: NavController, private platform: Platform, private _DB: DatabaseProvider,
    private _LOADER: PreloaderProvider, public navParams: NavParams,private modalCtrl: ModalController,public zone: NgZone) {}

  gotogallery(){
  this.navCtrl.push(PhotosPage);
  }

  display() {
    firebase.storage().ref().child('upload/banner.jpg').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }

  ionViewDidEnter() {
    //this._LOADER.displayPreloader();
    this.platform.ready()
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
          .then((credentials) => {
            this.loadAndParseAlbums();
            //this.loadAndParseMovies();
          })
          .catch((err: Error) => {
            console.log(err.message);
          });
      });
  }

  loadAndParseMovies() {
    this.movies = this._DB.renderMovies();
    this._LOADER.hidePreloader();
  }

  loadAndParseAlbums()
  {
    this.albums = this._DB.renderAlbums();
  }

  addAlbum()
  {
    let modal = this.modalCtrl.create('AddAlbumPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadAndParseMovies();
      }
    });
    modal.present();
  }

  addRecord() {
    //this.navCtrl.push(ModalsPage);
    let modal = this.modalCtrl.create('ModalpagePage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadAndParseMovies();
      }
    });
    modal.present();
  }

  showAlbum(albumID)
  {
    this.navCtrl.push(ShowAlbumPage, {AlbumID: albumID});
  }
}
