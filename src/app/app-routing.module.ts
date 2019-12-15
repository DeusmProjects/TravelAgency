import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthComponent} from "./auth/auth.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ActivateGuard} from "./ActivateGuard";
import {FilesUploadComponent} from "./files-upload/files-upload.component";
import {HotelSearchComponent} from "./hotel-search/hotel-search.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cities', loadChildren: './cities/cities.module#CitiesModule' },
  { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsModule' },
  { path: 'files', component: FilesUploadComponent },
  { path: 'search', component: HotelSearchComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
