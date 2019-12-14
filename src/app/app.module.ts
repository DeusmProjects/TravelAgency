import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTabsModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import {AuthComponent} from "./auth/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import {AuthCookie} from "./auth_cookie";
import {ActivateGuard} from "./ActivateGuard";
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    NotFoundComponent,
    HotelsListComponent,
    RegistrationComponent,
    FilesUploadComponent,
    HotelSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MDBBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    AuthCookie,
    ActivateGuard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
