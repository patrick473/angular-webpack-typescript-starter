import * as angular from 'angular';

export const app = angular.module('app',[]);

require ('./components/app.module.ts');

angular.element(document).ready( ()=> {
    angular.bootstrap(document, ['app']);
});