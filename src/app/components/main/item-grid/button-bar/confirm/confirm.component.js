import controller from './confirm.controller';

const ConfirmComponent = {
    bindings: {
        modalInstance: '<'
    },
    controller,
    template: `
        <div>
            <div class="modal-header">
                <button ng-click="$ctrl.close()" type="button" class="close"></button>
                <h3 class="modal-title">Confirm Deletion</h3>
            </div>

            <div class="modal-body">
                Are you sure that you want to delete this fighter?
            </div>

            <div class="modal-footer">
                <a ng-click="$ctrl.confirm()" class="btn btn-primary btn-sm">yes</a>
                <a ng-click="$ctrl.undo()" class="btn btn-warning btn-sm">no</a>
            </div>
        </div>
    `
};

export default ConfirmComponent;
