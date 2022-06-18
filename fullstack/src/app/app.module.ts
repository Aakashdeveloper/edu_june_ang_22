import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

@NgModule({
  /// all the component and pipe
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // all the modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // all the services 
  providers: [],
  // only one component
  bootstrap: [AppComponent]
})
export class AppModule { }
