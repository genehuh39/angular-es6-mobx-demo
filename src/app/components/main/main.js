import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MainComponent from './main.component';
import FighterService from './fighter.service';

const main = angular
    .module('main', [uiRouter])
    .component('main', MainComponent)
    .service('FighterService', FighterService)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('main', {
                url: '/',
                component: 'main',
                resolve: {
                    fighterData: FighterService => FighterService.getFighters()
                }
            });
    })
    .name;

export default main;
