import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { PreloaderProvider } from '../../providers/preloader/preloader';
import { DatabaseProvider } from '../../providers/database/database';
import * as firebase from 'firebase';

/**
/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {
  movieImage: any;

  public form: any;
  public filmImage: any;
  public users: any;
  public UserName: any = '';
  public UserImage: any = '';
  public UserFlat: any = '';
  public UserEmail: any = '';
  public UserPwd: any = '';
  public UserId: string = '';
  public isEditable: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public params: NavParams,
    private _FB: FormBuilder,
    private _IMG: ImageProvider,
    public viewCtrl: ViewController,
    private _LOADER: PreloaderProvider,
    private _DB: DatabaseProvider) {


    this.form = _FB.group({
      'summary': ['', Validators.minLength(10)],
      'year': ['', Validators.maxLength(4)],
      'name': ['', Validators.required],
      'duration': ['', Validators.required],
      'image': ['', Validators.required],
      'rating': ['', Validators.required],
      'genres': ['', Validators.required],
      'actors': ['', Validators.required]
    });

    this.users = firebase.database().ref('users/');


    if (params.get('isEdited')) {
      let uDetail = params.get('uDetail'),
        k;

      this.UserName = uDetail.username;
      this.UserFlat = uDetail.flatno;
      this.UserEmail = uDetail.email;
      this.UserPwd = uDetail.uDetail;
      this.movieImage = uDetail.image;
      this.filmImage = uDetail.image;
      this.UserId = uDetail.id;
      this.isEditable = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpagePage');
  }

  saveUser(val) {
    this._LOADER.displayPreloader();

      let unm: string = this.form.controls["name"].value,
      flat: string = this.form.controls["flat"].value,
      Email: number = this.form.controls["Email"].value,
      Pwd: any = this.form.controls["Pwd"].value,
      image: string = this.filmImage



    if (this.isEditable) {

      if (image !== this.movieImage) {
        this._DB.uploadImage(image)
          .then((snapshot: any) => {
            let uploadedImage: any = snapshot.downloadURL;

            this._DB.updateDatabase(this.UserId,
              {
                Username: unm,
                flatno: flat,
                Email: Email,
                password: Pwd,
                image: uploadedImage

              })
              .then((data) => {
                this._LOADER.hidePreloader();
              });

          });
      }
      else {

        this._DB.updateDatabase(this.UserId,
          {
                Username: unm,
                flatno: flat,
                Email: Email,
                password: Pwd,

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
            Username: unm,
            flatno: flat,
            Email: Email,
            password: Pwd,
            image: uploadedImage
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
