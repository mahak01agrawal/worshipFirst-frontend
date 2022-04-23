import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleLoginProvider } from 'angularx-social-login';

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
import { AudioVideoGeneralComponent } from './audio-video-general/audio-video-general.component';
import { AudioVideoSpecificComponent } from './audio-video-specific/audio-video-specific.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { PriestService } from './priest.service';
import { AuthenticationGuard } from './authentication.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { PriestPageComponent } from './priest-page/priest-page.component';
import { BookPriestComponent } from './book-priest/book-priest.component';
import { MediaFileService } from './media-file.service';
import { CartService } from './cart.service';
import { PlaceOrderComponent } from './place-order/place-order.component';

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
    ShopSpecificComponent,
    AudioVideoGeneralComponent,
    AudioVideoSpecificComponent,
    PageNotFountComponent,
    UserDashBoardComponent,
    PriestPageComponent,
    BookPriestComponent,
    PlaceOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '184960910870-0c1jonkrqg20ht7f5etv09ptted3lokc.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    UserService,
    PriestService,
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    },
  MediaFileService,CartService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
