import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppComponent from './app.component';
import Components from './components/components';
import './app.scss';

const root = angular
    .module('app', [
        uiRouter,
        uiBootstrap,
        Components
    ])
    .component('app', AppComponent)
    .config(($urlRouterProvider, $locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    });

export default root;