import { autorun } from 'mobx';

class DashboardController {
    constructor(FighterService) {
        'ngInject';
        this.FighterService = FighterService;
    }

    $onInit() {
        this.dispose = autorun(() => this.numberOfFighters = this.FighterService.fighterCount);
    }

    $onDestroy() {
        this.dispose();
    }
}

export default DashboardController;