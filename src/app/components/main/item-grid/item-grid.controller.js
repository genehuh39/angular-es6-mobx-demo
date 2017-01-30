import { autorun } from 'mobx';

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
            // Empty callback added to avoid console warnings
        }, (res) => {
            // Empty callback added to avoid console warnings
        });
    }

    $onInit() {
        this.dispose = autorun(() => this.data = this.FighterService.calculateFighterQuotients(this.FighterService.data));
    }

    $onDestroy() {
        this.dispose();
    }
}

export default ItemGridController;