import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddchargesAdminPage } from './addcharges-admin';

@NgModule({
  declarations: [
    AddchargesAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AddchargesAdminPage),
  ],
})
export class AddchargesAdminPageModule {}
