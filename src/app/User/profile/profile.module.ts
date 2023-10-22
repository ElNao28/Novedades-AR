import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { EditDataComponent } from './pages/edit-data/edit-data.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';



@NgModule({
  declarations: [
    EditAddressComponent,
    EditDataComponent,
    ViewProfileComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EditAddressComponent,
    EditDataComponent,
    ViewProfileComponent,
  ]
})
export class ProfileModule { }
