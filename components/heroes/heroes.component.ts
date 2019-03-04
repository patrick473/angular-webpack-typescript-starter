
const heroesTemplate = require('./heroes.html');

interface Ihero {
    id: number;
    name: string;
}
const heroesList: Ihero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  class heroesComponentController implements ng.IComponentController {

     heroes: Ihero[];
  
    constructor() {}
  
    public $onInit () {
      this.heroes = heroesList;
      console.log(this.heroes)
    }
  }
  
  export class heroesComponent implements ng.IComponentOptions {
  
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;
  
    constructor() {
      this.controller = heroesComponentController;
      this.controllerAs = "$ctrl";
      this.template = heroesTemplate;
    }
  }
  
 
