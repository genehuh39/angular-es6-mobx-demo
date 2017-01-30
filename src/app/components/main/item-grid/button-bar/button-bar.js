import angular from 'angular';
import Component from './button-bar.component.js';

const buttonBar = angular
    .module('main.itemGrid.buttonBar', [])
    .component('buttonBar', Component)
    .name;

export default buttonBar;
