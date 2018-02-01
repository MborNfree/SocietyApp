import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, Platform } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public params: NavParams,
    private _FB: FormBuilder,
    private _IMG: ImageProvider,
    public viewCtrl: ViewController,
    private _LOADER: PreloaderProvider,
    private _DB: DatabaseProvider,
    private platform: Platform) {


    this.form = _FB.group({
      'summary': ['', Validators.minLength(10)],
      'year': ['', Validators.maxLength(4)],
      'name': ['', Validators.required],
      'duration': ['', Validators.required],
      'image': ['', Validators.required],
      'rating': ['', Validators.required],
      'genres': ['', Validators.required],
      'actors': ['', Validators.required],
      'album': ['', Validators.required]
    });

    this.movies = firebase.database().ref('films/');


    if (params.get('isEdited')) {
      let movie = params.get('movie'),
        k;

      this.movieName = movie.title;
      this.movieDuration = movie.duration;
      this.movieSummary = movie.summary;
      this.movieRating = movie.rating;
      this.movieYear = movie.year;
      this.movieImage = movie.image;
      this.filmImage = movie.image;
      this.movieId = movie.id;


      for (k in movie.genres) {
        this.movieGenres.push(movie.genres[k].name);
      }


      for (k in movie.actors) {
        this.movieActors.push(movie.actors[k].name);
      }

      this.isEditable = true;
    }
  }

  ionViewDidEnter() {
    //console.log('ionViewDidLoad ModalpagePage');
    this.platform.ready()
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
          .then((credentials) => {
            this.loadAndParseAlbums();
          })
          .catch((err: Error) => {
            console.log(err.message);
          });
      });
  }

  loadAndParseAlbums()
  {
    this.albums = this._DB.renderAlbums();
    alert(this.albums);
  }

  saveMovie(val) {
    
    
    this._LOADER.displayPreloader();

    let title: string = this.form.controls["name"].value,
      summary: string = this.form.controls["summary"].value,
      rating: number = this.form.controls["rating"].value,
      genres: any = this.form.controls["genres"].value,
      actors: any = this.form.controls["actors"].value,
      duration: string = this.form.controls["duration"].value,
      year: string = this.form.controls["year"].value,
      album: string = this.form.controls["album"].value,
      image: string = this.filmImage,
      types: any = [],
      people: any = [],
      k: any;


    for (k in genres) {
      types.push({
        "name": genres[k]
      });
    }


    for (k in actors) {
      people.push({
        "name": actors[k]
      });
    }


    if (this.isEditable) {

      if (image !== this.movieImage) {
        this._DB.uploadImage(image)
          .then((snapshot: any) => {
            let uploadedImage: any = snapshot.downloadURL;

            this._DB.updateDatabase(this.movieId,
              {
                title: title,
                summary: summary,
                rating: rating,
                duration: duration,
                image: uploadedImage,
                genres: types,
                actors: people,
                year: year,
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
            summary: summary,
            rating: rating,
            duration: duration,
            genres: types,
            actors: people,
            year: year,
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
            summary: summary,
            rating: rating,
            duration: duration,
            genres: types,
            actors: people,
            year: year,
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
