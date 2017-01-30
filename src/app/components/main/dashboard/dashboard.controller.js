class DashboardController {
    constructor(FighterService) {
        'ngInject';
        this.FighterService = FighterService;
    }

    $onInit() {
        this.numberOfFighters = this.FighterService.getFighterCount();
    }
}

export default DashboardController;