import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeal } from '../model/meal.model';
import { ICity } from '../model/city.model';
import { IRest } from '../model/rest.model';

@Injectable()

export class HomeService {

    private baseUrl = "https://zomatoajulypi.herokuapp.com";
 
    constructor(private http: HttpClient) {}

    getMeals(): Observable<IMeal[]> {
        return this.http.get<IMeal[]>(`${this.baseUrl}/quicksearch`)
    }

    getCity(): Observable<ICity[]> {
        return this.http.get<ICity[]>(`${this.baseUrl}/location`)
    }

    getRestWrtCity(stateId:number): Observable<IRest[]> {
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?stateId=${stateId}`)
    }
}