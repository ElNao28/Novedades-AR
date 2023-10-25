import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyProductComponent } from './pages/buy-product/buy-product.component';
import { CardComponent } from './pages/card/card.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuyProductComponent,
    CardComponent,
    ViewProductComponent,
    ViewProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BuyProductComponent,
    CardComponent,
    ViewProductComponent,
    ViewProductsComponent,
  ]
})
export class ProductsModule { }
