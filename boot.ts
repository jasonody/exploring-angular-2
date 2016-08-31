import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
  .then(success => console.log('Bootstraped successfully!'))
  .catch(err => console.log(err));