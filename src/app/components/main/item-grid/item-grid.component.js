import controller from './item-grid.controller.js';

const ItemGridComponent = {
    controller,
    template: `
        <table class="item-grid table table-striped table-bordered table-hover table-responsive">
            <thead>
                <tr>
                    <td colspan="6"><a class="btn btn-primary" ng-click="$ctrl.addNewFighter()">add new fighter</a></td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Weight Class</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="fighter in $ctrl.data">
                    <td class="col-md-1">{{fighter.firstName}}</td>
                    <td class="col-md-1">{{fighter.lastName}}</td>
                    <td class="col-md-2">{{fighter.weight}}</td>
                    <td class="col-md-5">{{fighter.description}}</td>
                    <td class="col-md-1">
                        <uib-progressbar max="10" value="fighter.fighterQuotient" class="progress-striped" type="warning">
                            <span class="progress-label">{{fighter.fighterQuotient}}</span>
                        </uib-progressbar>
                    </td>
                    <td class="col-md-2 record-control"><button-bar fighter="fighter.id"></button-bar></td>
                </tr>
            </tbody>
        </table>
     `
};

export default ItemGridComponent;
