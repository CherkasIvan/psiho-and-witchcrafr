import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { FormPagesModule } from './pages/form-page/form-page-module';
import { HeaderModule } from './components/header/header.module';
import { SocialMediaModule } from './components/social-media/social-media.module';

import { PricesPagesModule } from './pages/prices-page/prices-pages.module';
import { AboutAuthorModule } from './components/about-author/about-author.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    SocialMediaModule,
    FooterModule,
    HeaderModule,
    PricesPagesModule,
    AboutAuthorModule,
    FormPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
