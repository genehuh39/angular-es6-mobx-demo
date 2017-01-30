class DashboardController {
    constructor($scope, FighterService) {
        'ngInject';
        this.$scope = $scope;
        this.FighterService = FighterService;
    }

    $onInit() {
        this.numberOfFighters = this.FighterService.getFighterCount();
        this.$scope.$on('fighterService:updateFighterData', (res) => {
            this.numberOfFighters = this.FighterService.getFighterCount();
        });
    }
}

export default DashboardController;