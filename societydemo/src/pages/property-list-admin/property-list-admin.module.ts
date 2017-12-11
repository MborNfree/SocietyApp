import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PropertyListAdminPage } from "./property-list-admin";

@NgModule({
  declarations: [PropertyListAdminPage],
  imports: [IonicPageModule.forChild(PropertyListAdminPage)]
})
export class PropertyListAdminPageModule {}
