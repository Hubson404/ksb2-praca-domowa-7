import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "../cars.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  @ViewChild('carForm') carAddForm: NgForm;

  car = {
    brand: '',
    model: '',
    color: '',
    productionYear: ''
  }

  openAddForm = false;

  constructor(private carService: CarsService) {
  }

  ngOnInit(): void {
  }

  onAddCar() {
    this.car.brand = this.carAddForm.value.brand;
    this.car.model = this.carAddForm.value.model;
    this.car.color = this.carAddForm.value.color;
    this.car.productionYear = this.carAddForm.value.productionYear;

    this.carService.createCar(this.car).subscribe();

    this.carService.getCars().subscribe(data => {
        this.carService.statusChanged.emit(data);
      }
    );

    this.carAddForm.reset();
  }

  onOpenAddForm() {
    this.openAddForm = true;
  }

  onClearInput() {
    this.carAddForm.reset();
  }

  onCloseForm() {
    this.openAddForm = false;
  }
}
