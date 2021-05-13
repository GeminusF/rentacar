import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';
import { RentalComponent } from './component/rental/rental.component';
import { NaviComponent } from './component/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './component/cardetail/cardetail.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent,
    DiscountPipe,
    FilterPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
