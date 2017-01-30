import { autorun } from 'mobx';

class DashboardController {
    constructor(FighterService) {
        'ngInject';
        this.FighterService = FighterService;
    }

    $onInit() {
        autorun(() => this.numberOfFighters = this.FighterService.fighterCount);
    }
}

export default DashboardController;