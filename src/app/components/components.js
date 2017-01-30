import angular from 'angular';
import Main from './main/main';
import ItemGrid from './main/item-grid/item-grid';
import ButtonBar from './main/item-grid/button-bar/button-bar';
import ConfirmModal from './main/item-grid/button-bar/confirm/confirm';
import FighterForm from './main/fighter-form/fighter-form';
import Dashboard from './main/dashboard/dashboard';

const components = angular
    .module('app.components', [
        Main,
        ItemGrid,
        ButtonBar,
        ConfirmModal,
        FighterForm,
        Dashboard
    ])
    .name;

export default components;