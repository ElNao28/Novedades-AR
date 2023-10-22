import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {
    path:'crear-cuenta',
    component:CreateAccountComponent
  },
  {
    path:'recuperar-contraeña',
    component:RecoverPasswordComponent
  },
  {
    path:'**',
    component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
