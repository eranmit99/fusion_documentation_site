import angular from 'angular';
import Components from './components/components';
import 'normalize.css';

import ExamplesPage from './app.component';

angular.module('app', [
  Components.name
])
.component('app', ExamplesPage);

angular.bootstrap(document.body, ['app'])
