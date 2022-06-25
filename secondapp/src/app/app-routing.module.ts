import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component'
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    {path:'details', component: DetailsComponent},
    {path:'listing/:id', component: ListingComponent},
    {path:'home', component: HomeComponent},
    {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
