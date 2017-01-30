class ButtonBarController {
    constructor($uibModal) {
        'ngInject';
        this.$uibModal = $uibModal;
    }

    openEditForm() {
        const fighterId = this.fighter;
        const formModal = this.$uibModal.open({
            component: 'fighterForm',
            controllerAs: '$ctrl',
            windowClass: 'fighter-form',
            size: 'md',
            resolve: {
                fighterId() {
                    return fighterId
                }
            }
        });

        formModal.result.then((res) => {
           //
        }, (res) => {
            //
        });
    }
}

export default ButtonBarController;