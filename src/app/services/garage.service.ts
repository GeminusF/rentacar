import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { GarageItem } from '../models/garageItem';
import { GarageItems } from '../models/garageItems';

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  constructor() {}

  addToGarage(car: Car) {
    let item = GarageItems.find((g) => g.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let garageItem = new GarageItem();
      garageItem.car = car;
      garageItem.quantity = 1;
      GarageItems.push(garageItem);
    }
  }

  removeToGarage(car:Car){
    let item : GarageItem = GarageItems.find((g) => g.car.id === car.id);
    GarageItems.splice(GarageItems.indexOf(item), 1);
  }

  list(): GarageItem[] {
    return GarageItems;
  }
}
