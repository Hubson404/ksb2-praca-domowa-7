import {EventEmitter, Injectable} from '@angular/core';
import {Car} from "./car.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: Car[] = [];
  statusChanged = new EventEmitter<Car[]>();

  constructor(private http: HttpClient) {
  }

  createCar(carData: Car) {
    const newCar: Car = {
      model: carData.model,
      brand: carData.brand,
      color: carData.color,
      productionYear: carData.productionYear
    }
    return this.http
      .post(
        'http://localhost:8080/cars',
        newCar
      );
  }

  getCars() {
    return this.http.get<Car[]>('http://localhost:8080/cars')
      .pipe(map(responseData => {
          this.cars = responseData;
          return this.cars;
        })
      );
  }

  getCarsFromYearScope(fromYear: string, toYear: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('from', fromYear)
    searchParams = searchParams.append('to', toYear)

    return this.http.get<Car[]>(
      'http://localhost:8080/cars/filterByYear',
      {
        params: searchParams
      }
    )
      .pipe(map(responseData => {
        this.cars = responseData;
        return this.cars;
      }));
  }
}

