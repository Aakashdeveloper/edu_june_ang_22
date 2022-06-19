import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.componet';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/search.component';
import { QuickSearchComponent } from './Home/quick-search.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HomeService } from './service/home.service';
import { ListingComponent } from './listing/listing.component';
import { LisitingService } from './service/lisiting.service';

@NgModule({
  /// all the component and pipe
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent,
    MyUpperPipe,
    ListingComponent
  ],
  // all the modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // all the services 
  providers: [
    HomeService,
    LisitingService
  ],
  // only one component
  bootstrap: [AppComponent]
})
export class AppModule { }
