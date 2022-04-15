import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopGeneralComponent } from './shop-general/shop-general.component';
import { ShopSpecificComponent } from './shop-specific/shop-specific.component';


const routes: Routes = [
  {path:"shop/:id",component:ShopSpecificComponent},
  {path:"shop",component:ShopGeneralComponent},
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
