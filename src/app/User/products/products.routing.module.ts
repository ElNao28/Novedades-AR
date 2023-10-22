import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './pages/view-products/view-products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { CardComponent } from './pages/card/card.component';
import { BuyProductComponent } from './pages/buy-product/buy-product.component';

const routes: Routes = [
  {
    path:'producto',
    component:ViewProductComponent
  },
  {
    path:'carrito',
    component:CardComponent
  },
  {
    path:'producto/comprar',
    component:BuyProductComponent
  },
  {
    path:'**',
    component:ViewProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
