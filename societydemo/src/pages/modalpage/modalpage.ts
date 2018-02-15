import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {

  public form: any;
  public filmImage: any;
  public movies: any;
  public movieName: any = '';
  public movieImage: any = '';
  public movieGenres: any = [];
  public movieDuration: any = '';
  public movieSummary: any = '';
  public movieActors: any = [];
  public movieYear: any = '';
  public movieRating: any = '';
  public movieId: string = '';
  public isEditable: boolean = false;
  public albums: any;
  private email: string = 'tejaswi@gmail.com';
  private pass: string = 'tejaswi@123';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public params: NavParams,
              private _FB: FormBuilder,
              private _IMG: ImageProvider,
              public viewCtrl: ViewController,
              private _LOADER: PreloaderProvider,
              private _DB: DatabaseProvider,
              private platform: Platform) {

    this.loadAndParseAlbums();

    this.form = _FB.group({
      'name': ['', Validators.required],
      'image': ['', Validators.required],
      'album': ['', Validators.required]
    });

    this.movies = firebase.database().ref('films/');


    if (params.get('isEdited')) {
      let movie = params.get('movie'),
        k;

      this.movieName = movie.title;
      this.movieImage = movie.image;
      this.filmImage = movie.image;
      this.movieId = movie.id;

      this.isEditable = true;
    }
  }

  ionViewDidEnter() {}

  loadAndParseAlbums()
  {
    this.albums = this._DB.renderAlbums();
    //alert(this.albums);
  }

  saveMovie(val)
  {
    //this._LOADER.displayPreloader();

    let title: string = this.form.controls["name"].value,
        album: string = this.form.controls["album"].value,
        image: string = this.filmImage


    if (this.isEditable)
    {
      if (image !== this.movieImage)
      {
        this._DB.uploadImage(image)
          .then((snapshot: any) => {
            let uploadedImage: any = snapshot.downloadURL;

            this._DB.updateDatabase(this.movieId,
              {
                title: title,
                image: uploadedImage,
                album: album
              })
              .then((data) => {
                this._LOADER.hidePreloader();
              });

          });
      }
      else {

        this._DB.updateDatabase(this.movieId,
          {
            title: title,
            album: album
          })
          .then((data) => {
            this._LOADER.hidePreloader();
          });
      }

    }
    else {
      this._DB.uploadImage(image)
        .then((snapshot: any) => {
          let uploadedImage: any = snapshot.downloadURL;

          this._DB.addToDatabase({
            title: title,
            image: uploadedImage,
            album: album
          })
            .then((data) => {
              this._LOADER.hidePreloader();
            });
        });

    }
    this.closeModal(true);
  }

  closeModal(val = null) {
    this.viewCtrl.dismiss(val);
  }

  selectImage() {
    this._IMG.selectImage()
      .then((data) => {
        this.filmImage = data;
      });
  }


}
