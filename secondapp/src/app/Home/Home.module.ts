import { NgModule } from '@angular/core'
import { MyUpperPipe } from '../pipes/myupper.pipe';
import { HomeService } from '../service/home.service';
import { HomeComponent } from './home.component';
import { QuickSearchComponent } from './quick-search.component';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.mdoule'

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe
    ],
    providers: [
        HomeService
    ],
    imports: [
        SharedModule
    ],
})

export class HomeModule {}