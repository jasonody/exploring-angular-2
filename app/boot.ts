import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {CarService} from './car.service';

bootstrap(AppComponent, [CarService])
  .then(success => console.log('Bootstraped successfully!'))
  .catch(err => console.log(err));