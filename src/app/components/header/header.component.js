import template from './header.html'
import './header.scss';


export class HeaderController {
    constructor() {
      "ngInject";
       this.headerWithPrefix = "Prefix " + this.headerText;
    }
}

export default {
  bindings: {
    headerText: '='
  },
  template,
  controller: HeaderController,
  controllerAs: 'vm'
}
