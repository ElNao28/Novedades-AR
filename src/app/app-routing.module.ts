import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './User/shared/pages/home-page/home-page.component';
import { AttentionClientComponent } from './User/shared/pages/attention-client/attention-client.component';
import { NoticeOfPrivacyComponent } from './User/shared/pages/notice-of-privacy/notice-of-privacy.component';
import { CookiesPageComponent } from './User/shared/pages/cookies-page/cookies-page.component';
import { TermsAndConditionsComponent } from './User/shared/pages/terms-and-conditions/terms-and-conditions.component';

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
    path:'Terminos-y-Condiciones',
    component:TermsAndConditionsComponent
  },
  {
    path:'Politicas-de-cookies',
    component:CookiesPageComponent
  },
  {
    path:'Aviso-de-privacidad',
    component:NoticeOfPrivacyComponent
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
