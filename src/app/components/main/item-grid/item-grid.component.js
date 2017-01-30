import controller from './item-grid.controller.js';

const ItemGridComponent = {
    controller,
    template: `
        <table class="table table-striped table-bordered table-hover table-responsive">
            <thead>
                <tr>
                    <td colspan="5"><a class="btn btn-primary" ng-click="$ctrl.addNewFighter()">add new fighter</a></td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Weight Class</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="fighter in $ctrl.data">
                    <td class="col-md-1">{{fighter.firstName}}</td>
                    <td class="col-md-1">{{fighter.lastName}}</td>
                    <td class="col-md-2">{{fighter.weight}}</td>
                    <td class="col-md-6">{{fighter.description}}</td>
                    <td class="col-md-2"><button-bar fighter="fighter.id"></button-bar></td>
                </tr>
            </tbody>
        </table>
     `
};

export default ItemGridComponent;
