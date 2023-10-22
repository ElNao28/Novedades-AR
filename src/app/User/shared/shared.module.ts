import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttentionClientComponent } from './pages/attention-client/attention-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrevProductsComponent } from './components/prev-products/prev-products.component';

@NgModule({
  declarations: [
    AttentionClientComponent,
    HomePageComponent,
    CarouselComponent,
    NavBarComponent,
    PrevProductsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AttentionClientComponent,
    HomePageComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
