import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
  // Here we load the module only when
  // the user access to login or register pages

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
