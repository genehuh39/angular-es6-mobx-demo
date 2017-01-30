import { autorun } from 'mobx';

class MainController {

    constructor(FighterService) {
        'ngInject';

        autorun(()=> this.data = FighterService.data);
    }

}


export default MainController;
