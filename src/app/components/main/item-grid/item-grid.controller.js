class ItemGridController {
    constructor($scope, $uibModal, FighterService) {
        'ngInject';
        this.$scope = $scope;
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
        this.dispose = this.$scope.$on('fighterService:updateFighterData', res => {
            this.data = this.FighterService.calculateFighterQuotients(this.FighterService.data);
        });
    }

    $onDestroy() {
        this.dispose();
    }
}

export default ItemGridController;