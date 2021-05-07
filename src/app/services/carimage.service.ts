import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarimageService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImage(): Observable<ListResponseModel<CarImage>> {
    let newPath  = this.apiUrl+ "CarImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  
  getCarImageByCarId(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getallbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
