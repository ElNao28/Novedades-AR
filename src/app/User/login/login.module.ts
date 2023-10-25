import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LoginRoutingModule } from './login.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateAccountComponent,
    LogInComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CreateAccountComponent,
    LogInComponent,
    RecoverPasswordComponent,
    LoginRoutingModule
  ]
})
export class LoginModule { }
