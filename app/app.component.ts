import {Component} from 'angular2/core';
import {CarService} from './car.service';

@Component({
  selector: 'main-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="#car of cars">{{car.name}}</li>
    </ul>
  `
})
export class AppComponent {
  title: string = 'My main app component';
  cars: Array<any>;
  constructor(private _carService: CarService) {
    this.cars = _carService.getCars();
  }
}