import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ICity } from '../model/city.model';
import { IRest } from '../model/rest.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: String = "Find The Best Restaurants";
  locations: ICity[] = [];
  restaurants: IRest[] = [];

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getCity()
      .subscribe((data:ICity[]) => this.locations = data)
  }

  handleCity(event:Event){
    console.log((event.target as HTMLInputElement).value)
    let stateId = Number((event.target as HTMLInputElement).value);
    this.homeService.getRestWrtCity(stateId)
      .subscribe((data:IRest[]) => this.restaurants = data)
  }

}
