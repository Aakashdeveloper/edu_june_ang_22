import { NgModule } from '@angular/core'
import { CostFilterComponent } from '../filters/costFilter.component';
import { CuisineFilterComponent } from '../filters/cuisineFilter.component';
import { RestSearchPipe } from '../pipes/search.pipe';
import { LisitingService } from '../service/lisiting.service';
import { ListingComponent } from './listing.component';
import { SharedModule } from '../shared/shared.mdoule'


@NgModule({
    declarations: [
        ListingComponent,
        RestSearchPipe,
        CuisineFilterComponent,
        CostFilterComponent
    ],
    providers: [
        LisitingService
    ],
    imports: [
        SharedModule
    ],
})

export class LisitingModule {}