import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AudioVideoGeneralComponent } from './audio-video-general/audio-video-general.component';
import { AudioVideoSpecificComponent } from './audio-video-specific/audio-video-specific.component';
import { BookPriestComponent } from './book-priest/book-priest.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PriestPageComponent } from './priest-page/priest-page.component';
import { ShopGeneralComponent } from './shop-general/shop-general.component';
import { ShopSpecificComponent } from './shop-specific/shop-specific.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';

const routes: Routes = [
  { 
    path : "", component : UserDashBoardComponent,
    children:
    [
      {path: "",component: HomeComponent},
      {path:"shops/:id",component:ShopSpecificComponent},
      {path:"shop",component:ShopGeneralComponent},
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"audio-video",component:AudioVideoGeneralComponent},
      {path:"audio-videos/:id",component:AudioVideoSpecificComponent},
      {path:"book-priest",component:BookPriestComponent},
      {path : "place-order",component : PlaceOrderComponent}  
  ]},
  {path:'priest',component : PriestPageComponent},
  {path : "**", component : PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
