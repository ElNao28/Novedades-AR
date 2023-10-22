import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShoppingComponent } from './pages/list-shopping/list-shopping.component';
import { StatusShoppingComponent } from './pages/status-shopping/status-shopping.component';
import { ShoppingRoutingModule } from './shopping.routing.module';



@NgModule({
  declarations: [
    ListShoppingComponent,
    StatusShoppingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListShoppingComponent,
    StatusShoppingComponent,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
