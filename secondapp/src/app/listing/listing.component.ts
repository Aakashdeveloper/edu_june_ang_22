import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent {
    mealId: Number = 0;

    constructor(private route:ActivatedRoute) {}

    ngOnInit(): void {
        this.mealId = Number(this.route.snapshot.params['id'])
    }
}