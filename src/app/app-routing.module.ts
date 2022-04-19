import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AudioVideoGeneralComponent } from './audio-video-general/audio-video-general.component';
import { AudioVideoSpecificComponent } from './audio-video-specific/audio-video-specific.component';
import { BookPriestComponent } from './book-priest/book-priest.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopGeneralComponent } from './shop-general/shop-general.component';
import { ShopSpecificComponent } from './shop-specific/shop-specific.component';


const routes: Routes = [
  {path:"shops",component:ShopSpecificComponent},
  {path:"shop",component:ShopGeneralComponent},
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"audio-video",component:AudioVideoGeneralComponent},
  {path:"audio-videos",component:AudioVideoSpecificComponent},
  {path:"book-priest",component:BookPriestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
