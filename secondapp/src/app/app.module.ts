import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.componet';
import { HeaderComponent } from './Header/header.component';
import { HomeModule } from './Home/Home.module';
import { LisitingModule } from './listing/listing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  /// all the component and pipe
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent
  ],
  // all the modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    LisitingModule
  ],
  // all the services 
  providers: [],
  // only one component
  bootstrap: [AppComponent]
})
export class AppModule { }