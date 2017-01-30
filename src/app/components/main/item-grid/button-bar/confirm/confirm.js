import angular from 'angular';
import Component from './confirm.component';

const confirm = angular
    .module('main.itemGrid.buttonBar.confirmModal', [])
    .component('confirmModal', Component)
    .name;

export default confirm;
