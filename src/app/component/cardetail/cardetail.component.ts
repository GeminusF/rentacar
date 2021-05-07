import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carimage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cardetails: CarDetail[];
  carImages: CarImage[];
  constructor(
    private cardetailService: CardetailService,
    private carimageService: CarimageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarDetails();

    this.getCarImages();

    this.activatedRoute.params.subscribe((params) =>{
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"]);
      } else {
        this.getCarDetails();
      }
    })
  }

  getCarDetails() {
    this.cardetailService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarImages() {
    this.carimageService.getCarImage().subscribe((response) => {
      this.carImages = response.data;

      console.log(response.data);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carimageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;

      console.log(response.data);
    });
  }
}
