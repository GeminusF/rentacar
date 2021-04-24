import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44350/api/';
  
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbybrandid?id=" + brandId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbycolorid?id=" + colorId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
