import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CookiesPageComponent } from './cookies-page/cookies-page.component';
import { NoticeOfPrivacyComponent } from './notice-of-privacy/notice-of-privacy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    CookiesPageComponent,
    NoticeOfPrivacyComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PagesModule { }
