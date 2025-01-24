import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ProductdetailsComponent } from './shop/productdetails/productdetails.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';  // Ajouté pour les animations
import { ToastrModule } from 'ngx-toastr';
import { BasketComponent } from './basket/basket.component';
import { ProgramDetailsComponent } from './programs/program-details/program-details.component';
import { BmiComponent } from './bmi/bmi.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    ProductdetailsComponent,
    RecepiesComponent,
    RecipeDetailsComponent,
    ContactComponent,
    LoginComponent,
    ProgramsComponent,
    AboutComponent,
    BasketComponent,
    ProgramDetailsComponent,
    BmiComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({   
      positionClass: 'toast-bottom-right', 
      preventDuplicates: true,
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    
    }),

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
