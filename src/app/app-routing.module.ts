import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './User/shared/pages/home-page/home-page.component';
import { AttentionClientComponent } from './User/shared/pages/attention-client/attention-client.component';

const routes: Routes = [
  {
    path:'Inicio',
    component:HomePageComponent
  },
  {
    path:'Atencion-al-cliente',
    component:AttentionClientComponent
  },
  {
    path:'productos',
    loadChildren:()=>import ('./User/products/products.routing.module').then(m=>m.ProductsRoutingModule)
  },
  {
    path:'mis-compras',
    loadChildren:()=>import ('./User/shopping/shopping.routing.module').then(m=>m.ShoppingRoutingModule)
  },
  {
    path:'login',
    loadChildren:()=>import ('./User/login/login.routing.module').then(m=>m.LoginRoutingModule)
  },
  {
    path:'perfil',
    loadChildren:()=>import ('./User/profile/profile.routing.module').then(m=>m.ProfileRoutingModule)
  },
  {
    path:'**',
    redirectTo:'Inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
