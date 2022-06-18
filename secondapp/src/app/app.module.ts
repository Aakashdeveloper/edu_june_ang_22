import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.componet';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/search.component';
import { QuickSearchComponent } from './Home/quick-search.component';

@NgModule({
  /// all the component and pipe
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent
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
