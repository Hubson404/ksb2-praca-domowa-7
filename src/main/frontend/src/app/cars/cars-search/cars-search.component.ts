import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css']
})
export class CarsSearchComponent implements OnInit {

  fromYear: string = '';
  toYear: string = '';

  constructor(private carService: CarsService) {
  }

  ngOnInit(): void {
  }

  onFilter(filterParams: { fromYear: string, toYear: string }) {
    this.carService.getCarsFromYearScope(filterParams['fromYear'], filterParams['toYear'])
      .subscribe(
        responseData => {
          this.carService.statusChanged.emit(responseData);
        }
      );
  }

  onClearFilter() {
    this.carService.getCars()
      .subscribe(
        responseData => {
          this.carService.statusChanged.emit(responseData);
          this.fromYear = '';
          this.toYear = '';
        }
      );
  }

}
