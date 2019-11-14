import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthComponent} from "./auth/auth.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ActivateGuard} from "./ActivateGuard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cities', loadChildren: './cities/cities.module#CitiesModule', canActivate: [ActivateGuard] },
  { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsModule' },
  { path: 'auth', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
