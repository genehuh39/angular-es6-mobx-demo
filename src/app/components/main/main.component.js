import controller from './main.controller';

const MainComponent = {
    bindings: {
    },
    controller,
    template: `
        <div class="container">
            <h3>UFC Fighters</h3>
            <dashboard></dashboard>
            <item-grid></item-grid>
        </div>
     `
};

export default MainComponent;
