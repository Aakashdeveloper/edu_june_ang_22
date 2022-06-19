import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../model/rest.model';

@Injectable()

export class LisitingService {

    private baseUrl = "https://zomatoajulypi.herokuapp.com";
 
    constructor(private http: HttpClient) {}

    getList(mealId:number): Observable<IRest[]> {
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?mealtype_id=${mealId}`)
    }
}