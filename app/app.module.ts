import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
/**
 * Here we don't need to import the AuthModule directly
 * from app.module.ts but rather let the app-routing.module.ts
 * do the job by lazy loading the module
 */
// import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
