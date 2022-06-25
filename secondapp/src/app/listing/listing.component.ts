import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../model/rest.model';
import { LisitingService } from '../service/lisiting.service'

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent {
    mealId: number = 0;
    restaurants: IRest[] = [];
    userInput: string = '';
    filterText: string = 'Cuisine Filter'

    constructor(private route:ActivatedRoute,
                private listingService:LisitingService) {}

    ngOnInit(): void {
        this.mealId = Number(this.route.snapshot.params['id'])
        sessionStorage.setItem('mealId', this.route.snapshot.params['id']);
        this.listingService.getList(this.mealId)
            .subscribe((data:IRest[]) => {
                this.restaurants = data
            })
    }

    dataReceive(cuisineId: string){
        console.log(">>>>cuisineId>>",cuisineId)
        this.listingService.getCuisineData(cuisineId)
            .subscribe((data: IRest[]) => {
                this.restaurants = data
            })
    }

    costDataReceive(cost: string){
        let lcost = Number(cost.split('-')[0])
        let hcost = Number(cost.split('-')[1])
        this.listingService.getCostData(lcost,hcost)
            .subscribe((data: IRest[]) => {
                this.restaurants = data
            })
    }
}