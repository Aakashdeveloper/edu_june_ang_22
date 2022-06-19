import { Component, OnInit } from '@angular/core';
import { IMeal } from '../model/meal.model';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})

export class QuickSearchComponent implements OnInit {
    mealType: IMeal[] = []

    constructor(private homeService:HomeService) { }
  
    // any thing you want on page load
    ngOnInit():void{
      this.homeService.getMeals()
        .subscribe((data:IMeal[]) => this.mealType = data)
    }

 }
