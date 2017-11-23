import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendSmsModalPage } from './send-sms-modal';

@NgModule({
  declarations: [
    SendSmsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SendSmsModalPage),
  ],
})
export class SendSmsModalPageModule {}
