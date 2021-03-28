import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";
import {Car} from "../car.model";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarsService) {
  }

  ngOnInit(): void {
    this.onFetchCars();

    this.carService.statusChanged
      .subscribe(
        data => {
          this.cars = data
        });
  }

  onFetchCars() {
    this.carService.getCars()
      .subscribe(
        responseData => {
          this.cars = responseData;
        })
  }
}
