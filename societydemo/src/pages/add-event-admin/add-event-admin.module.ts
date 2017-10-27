import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventAdminPage } from './add-event-admin';

@NgModule({
  declarations: [
    AddEventAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventAdminPage),
  ],
})
export class AddEventAdminPageModule {}
