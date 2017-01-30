import controller from './fighter-form.controller';
import template from './fighter-form.html';

const FighterFormComponent = {
    bindings: {
        modalInstance: '<',
        resolve: '<'
    },
    controller,
    template
};

export default FighterFormComponent;
