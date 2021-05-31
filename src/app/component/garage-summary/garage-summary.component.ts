import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { GarageItem } from 'src/app/models/garageItem';
import { GarageService } from 'src/app/services/garage.service';

@Component({
  selector: 'app-garage-summary',
  templateUrl: './garage-summary.component.html',
  styleUrls: ['./garage-summary.component.css'],
})
export class GarageSummaryComponent implements OnInit {
  garageItems: GarageItem[];
  constructor(private garageService: GarageService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getGarage();
  }

  getGarage() {
    this.garageItems = this.garageService.list();
  }

  removeFromGarage(car: Car) {
    this.garageService.removeToGarage(car);
    this.toastrService.error("Maşın əldən getdi", car.description + " qarajınızdan çıxarıldı")
  }
}
