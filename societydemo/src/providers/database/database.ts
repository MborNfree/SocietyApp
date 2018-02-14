
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';

@Injectable()
export class DatabaseProvider {

  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }

  renderMovies(): Observable<any> {

    //alert("1");
    return new Observable(observer => {
      //alert("2");
      let films: any = [];
      firebase.database().ref('films').orderByKey().once('value', (items: any) => {
        //alert("3");
        console.log(items);
        items.forEach((item) => {
          //alert("4"+item);
          films.push({
            id: item.key,
            actors: item.val().actors,
            date: item.val().date,
            duration: item.val().duration,
            genres: item.val().genres,
            image: item.val().image,
            rating: item.val().rating,
            summary: item.val().summary,
            title: item.val().title,
            album: item.val().album
          });
        });

        observer.next(films);
        observer.complete();
      },
        (error) => {
          console.log("Observer error: ", error);
          console.dir(error);
          observer.error(error)
        });

    });
  }

  addAlbumToDatabase(albumObj): Promise<any> {
    return new Promise((resolve) => {
      let addRef = firebase.database().ref('albums');
      addRef.push(albumObj);
      resolve(true);
    });
  }

  renderAlbums(): Observable<any> {

    //alert("1");
    return new Observable(observer => {
      //alert("2");
      let albums: any = [];
      firebase.database().ref('albums').orderByKey().once('value', (items: any) => {
        //alert("3");
        console.log(items);
        items.forEach((item) => {
          //alert("4"+item);
          albums.push({
            id: item.key,
            albumName: item.val().albumName
          });
        });

        observer.next(albums);
        observer.complete();
      },
        (error) => {
          console.log("Observer error: ", error);
          console.dir(error);
          observer.error(error)
        });

    });
  }


  renderUsers(): Observable<any> {

    return new Observable(observer => {
      let users: any = [];
      firebase.database().ref('users').orderByKey().once('value', (items: any) => {
        items.forEach((item) => {
          users.push({
            id: item.key,
            username: item.val().username,
            flatno: item.val().flatno,
            familyMember: item.val().familyMember,
            parking_slot: item.val().parking_slot

          });
        });

        observer.next(users);
        observer.complete();
      },
        (error) => {
          console.log("Observer error: ", error);
          console.dir(error);
          observer.error(error)
        });

    });
  }

  deleteMovie(id): Promise<any> {
    return new Promise((resolve) => {
      let ref = firebase.database().ref('films').child(id);
      ref.remove();
      resolve(true);
    });
  }



  addToDatabase(movieObj): Promise<any> {
    return new Promise((resolve) => {
      let addRef = firebase.database().ref('films');
      addRef.push(movieObj);
      resolve(true);
    });
  }

  updateDatabase(id, moviesObj): Promise<any> {
    return new Promise((resolve) => {
      var updateRef = firebase.database().ref('films').child(id);
      updateRef.update(moviesObj);
      resolve(true);
    });
  }

  uploadImage(imageString): Promise<any> {
    let image: string = 'movie-' + new Date().getTime() + '.jpg',
      storageRef: any,
      parseUpload: any;

    return new Promise((resolve, reject) => {
      storageRef = firebase.storage().ref('posters/' + image);
      parseUpload = storageRef.putString(imageString, 'data_url');

      parseUpload.on('state_changed', (_snapshot) => {
        // We could log the progress here IF necessary
        // console.log('snapshot progess ' + _snapshot);
      },
        (_err) => {
          reject(_err);
        },
        (success) => {
          resolve(parseUpload.snapshot);
        });
    });
  }


}
