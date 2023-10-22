import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './User/login/login.module';
import { ProductsModule } from './User/products/products.module';
import { ProfileModule } from './User/profile/profile.module';
import { SharedModule } from './User/shared/shared.module';
import { ShoppingModule } from './User/shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductsModule,
    ProfileModule,
    SharedModule,
    ShoppingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
