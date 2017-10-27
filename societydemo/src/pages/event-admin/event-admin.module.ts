import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventAdminPage } from './event-admin';

@NgModule({
  declarations: [
    EventAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(EventAdminPage),
  ],
})
export class EventAdminPageModule {}
