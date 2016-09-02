import {Injectable} from 'angular2/core';

@Injectable()
export class CarService {
  getCars = () => [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Nissan' },
    { id: 3, name: 'Ford' }
  ];
}