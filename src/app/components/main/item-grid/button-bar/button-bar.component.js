import controller from './button-bar.controller';

const ButtonBarComponent = {
    bindings: {
        fighter: '<'
    },
    controller,
    template: `
        <div class="btn-group">
            <a ng-click="$ctrl.openEditForm($ctrl.fighter)" class="btn btn-sm btn-success">edit</a>
            <a ng-click="$ctrl.deleteFighter($ctrl.fighter)" class="btn btn-sm btn-danger">delete</a>
        </div>
     `
};

export default ButtonBarComponent;
