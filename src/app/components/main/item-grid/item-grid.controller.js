class ItemGridController {
    constructor($uibModal, FighterService) {
        'ngInject';
        this.$uibModal = $uibModal;
        this.FighterService = FighterService;
    }

    addNewFighter() {
        const formModal = this.$uibModal.open({
            component: 'fighterForm',
            controllerAs: '$ctrl',
            windowClass: 'fighter-form',
            size: 'md',
            resolve: {
                fighterId() {
                    return null;
                }
            }
        });

        formModal.result.then((res) => {
            this.FighterService.addFighter(res).then(() => {
                this.data = this.data = this.FighterService.calculateFighterQuotients(this.FighterService.data);
            })
        }, (res) => {
            //
        });
    }

    $onInit() {
        this.data = this.FighterService.calculateFighterQuotients(this.FighterService.data);
    }
}

export default ItemGridController;