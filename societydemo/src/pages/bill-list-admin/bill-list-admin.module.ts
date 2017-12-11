import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BillListAdminPage } from "./bill-list-admin";

@NgModule({
  declarations: [BillListAdminPage],
  imports: [IonicPageModule.forChild(BillListAdminPage)]
})
export class BillListAdminPageModule {}
