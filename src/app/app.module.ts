import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';
import { CitiesComponent } from './cities/cities.component';
import { ToursComponent } from './tours/tours.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    InfoComponent,
    CitiesComponent,
    ToursComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
