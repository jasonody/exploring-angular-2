import {Component} from 'angular2/core';

@Component({
  selector: 'exp-cars',
  templateUrl: 'app/cars/car-list.template.html'
})
export class CarListComponent {
  title: string = 'Vehicles Up For Grabs';
  showImages: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  listFilter: string = 'nissan';
  cars: any[] = [{
    "id": 1,
    "manufacturer": "Nissan",
    "model": "Leaf S",
    "year": "2016",
    "description": "100 % electric; 100% fun!",
    "price": 29010,
    "rating": 3.2,
    "imageUrl": "http://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10932/2016-nissan-leaf-front_10932_032_640x480_qab.png"
  }, {
    "id": 2,
    "manufacturer": "Infinite",
    "model": "Q50 Hybrid",
    "year": "2017",
    "description": "Luxuary sedan to eat your cookies in",
    "price": 47050,
    "rating": 4.2,
    "imageUrl": "http://nissan-infiniti.com/wp-content/uploads/2015/04/2016-Infiniti-Q50-front-view.jpg"
  }];

  toggleShowingImages(): void {
    this.showImages = !this.showImages;
  }
}