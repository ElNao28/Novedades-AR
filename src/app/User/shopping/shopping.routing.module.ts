import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShoppingComponent } from './pages/list-shopping/list-shopping.component';
import { StatusShoppingComponent } from './pages/status-shopping/status-shopping.component';

const routes: Routes = [
  {
    path:'estado-compra',
    component:StatusShoppingComponent
  },
  {
    path:'**',
    component:ListShoppingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
