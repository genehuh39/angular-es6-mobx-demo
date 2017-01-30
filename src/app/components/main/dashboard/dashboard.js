import angular from 'angular';
import Component from './dashboard.component';

const dashboard = angular
    .module('main.dashboard', [])
    .component('dashboard', Component)
    .name;

export default dashboard;
