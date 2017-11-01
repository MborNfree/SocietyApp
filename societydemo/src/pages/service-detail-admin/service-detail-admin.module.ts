import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceDetailAdminPage } from './service-detail-admin';

@NgModule({
  declarations: [
    ServiceDetailAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDetailAdminPage),
  ],
})
export class ServiceDetailAdminPageModule {}
