import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { ImgSliderComponent } from './home/img-slider/img-slider.component';
import { MainPartComponent } from './home/main-part/main-part.component';
import { WhyUsComponent } from './home/why-us/why-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BannerAudioComponent } from './home/banner-audio/banner-audio.component';
import { ShopGeneralComponent } from './shop-general/shop-general.component';
import { ShopSpecificComponent } from './shop-specific/shop-specific.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
     HeaderComponent,
     NavLinksComponent,
     ImgSliderComponent,
     MainPartComponent,
     WhyUsComponent,
     HomeComponent,
     AboutComponent,
     ContactComponent,
     BannerAudioComponent,
     ShopGeneralComponent,
     ShopSpecificComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
