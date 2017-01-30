import angular from 'angular';
import Component from './item-grid.component.js';
import './item-grid.scss';

const itemGrid = angular
    .module('main.itemGrid', [])
    .component('itemGrid', Component)
    .name;

export default itemGrid;
