import {Component} from 'angular2/core';
import {CarService} from './car.service';
import {CarListComponent} from './cars/car-list.component';

@Component({
  selector: 'exp-main-app',
  template: `
    <h1>{{title}}</h1>
    <exp-cars></exp-cars>
    <!--<ul>
      <li *ngFor="#car of cars">{{car.name}}</li>
    </ul>-->
  `,
  directives: [CarListComponent]
})
export class AppComponent {
  title: string = 'Downtown Cars';
  cars: Array<any>;
  constructor(private _carService: CarService) {
    this.cars = _carService.getCars();
  }
}