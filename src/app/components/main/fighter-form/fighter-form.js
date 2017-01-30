import angular from 'angular';
import Component from './fighter-form.component';
import './fighter-form.scss';

const fighterForm = angular
    .module('main.fighterForm', [])
    .component('fighterForm', Component)
    .name;

export default fighterForm;
