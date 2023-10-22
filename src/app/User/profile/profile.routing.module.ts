import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { EditDataComponent } from './pages/edit-data/edit-data.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';

const routes: Routes = [
  {
    path:'perfil',
    component:ViewProfileComponent
  },
  {
    path:'editar-perfil',
    component:EditDataComponent
  },
  {
    path:'editar-direccion',
    component:EditAddressComponent
  },
  {
    path:'**',
    component:ViewProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
