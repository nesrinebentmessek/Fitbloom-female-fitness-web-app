import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductdetailsComponent } from './shop/productdetails/productdetails.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { ProgramDetailsComponent } from './programs/program-details/program-details.component';
import { BmiComponent } from './bmi/bmi.component';
import { authGuard } from './auth.guard';
import { loginGuard } from './login-guard.guard';





const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'details/:id', component: ProductdetailsComponent, canActivate: [authGuard] },
  { path: 'recepies', component: RecepiesComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'detailsRecipe/:id', component: RecipeDetailsComponent, canActivate: [authGuard] },
  { path: 'programs', component: ProgramsComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'basket', component: BasketComponent, canActivate: [authGuard] },
  { path: 'progdetails/:id', component: ProgramDetailsComponent, canActivate: [authGuard] },
  { path: 'bmi', component: BmiComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
