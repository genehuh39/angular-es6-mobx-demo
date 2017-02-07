# angular-es6-mobx-demo
This is a simple CRUD demo app built to demonstrate how to use MobX for state management within an Angular 1.x app built
using Angular components, unidirectional data flow and ES6.  

## Getting Started
You will need `node` (`brew install node` or https://nodejs.org/en/) and `npm` (which ships with node).

## Installing
```bash
git clone https://github.com/genehuh39/angular-es6-mobx-demo.git
cd angular-es6-mobx-demo
npm install
npm start
```

## Usage
To see the demo app with MobX enabled, use the `develop` branch.  To see the 
demo app without MobX, but using an Angular event bus, check out the `no-mobx-event` branch.  Additionally, there is a
`no-mobx` branch that you can check out to see that the app does not work without either MobX or an event bus, due
to unidirectional data flow.