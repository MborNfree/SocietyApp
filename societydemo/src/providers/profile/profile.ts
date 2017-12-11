<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


=======
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
>>>>>>> aea7b44807dfda4017e3c6cc120a717b4ce6b027

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  constructor(public http: Http) {
    console.log("Hello ProfileProvider Provider");
  }

  // getUserByUserId(userId:string): Observable<Profile>{
  //   return this.db.list('profiles',{
  //       query: {
  //         orderByChild: 'userId',
  //         equalTo: userId
  //     }
  //   })
  //   .first()
  //   .map(result => Profile.parseFromJson(result));
  // }
}
