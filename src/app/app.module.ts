import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {DhmStarRatingComponent} from 'dhm-star-rating';
import { SearchComponent } from './search/search.component'
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component'; 
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    ProductPageComponent,
    CartPageComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DhmStarRatingComponent,
    FormsModule,
    BrowserAnimationsModule,  /* angular material je sam ubacio? */    /* da bi mat moduli radili direktno preko app modula */
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [UserService], 
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent] // call only when needed 
})
export class AppModule { }
