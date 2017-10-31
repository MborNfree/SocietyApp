import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CircularDetailAdminPage } from './circular-detail-admin';

@NgModule({
  declarations: [
    CircularDetailAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(CircularDetailAdminPage),
  ],
})
export class CircularDetailAdminPageModule {}
