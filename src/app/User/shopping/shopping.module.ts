import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShoppingComponent } from './pages/list-shopping/list-shopping.component';
import { StatusShoppingComponent } from './pages/status-shopping/status-shopping.component';



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
    StatusShoppingComponent
  ]
})
export class ShoppingModule { }
