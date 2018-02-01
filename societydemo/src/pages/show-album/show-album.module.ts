import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowAlbumPage } from './show-album';

@NgModule({
  declarations: [
    ShowAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowAlbumPage),
  ],
})
export class ShowAlbumPageModule {}
