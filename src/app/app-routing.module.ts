import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { CardetailComponent } from './component/cardetail/cardetail.component';
import { ColorComponent } from './component/color/color.component';

const routes: Routes = [
  {
    path: '',
    component: CarComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'colors',
    component: ColorComponent,
  },
  {
    path: 'brands',
    component: BrandComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },
  {
    path: 'cars/cardetail',
    component: CardetailComponent,
  },
  {
    path: 'cars/cardetail/:carId',
    component: CardetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
