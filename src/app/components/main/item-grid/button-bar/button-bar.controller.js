class ButtonBarController {
    constructor($uibModal, FighterService) {
        'ngInject';
        this.$uibModal = $uibModal;
        this.FighterService = FighterService;
    }

    openEditForm(fighterId) {
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
            this.FighterService.updateFighter(res);
        }, (res) => {
            //
        });
    }

    deleteFighter(fighterId) {
        const confirmModal = this.$uibModal.open({
            component: 'confirmModal',
            controllerAs: '$ctrl',
            windowClass: 'confirm-modal',
            size: 'md'
        });

        confirmModal.result.then((res) => {
            this.FighterService.deleteFighter(fighterId);
        }, (res) => {
            //
        });
    }
}

export default ButtonBarController;