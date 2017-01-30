import { extendObservable, action } from 'mobx';
import fighterData from './mock.json';

class FighterService {
    constructor($timeout, $q) {
        'ngInject';

        this.$timeout = $timeout;
        this.$q = $q;
        this.weightClasses = ['Heavy', '205', '185', '170', '155', '145', '135', '125', '115'];
        this.data = [];

        // Initialize the MobX observables
        extendObservable(this, {
            data: [],
            /**
             * fighterCount
             *  Computed function to return the total number of fighters
             *
             * @returns {Number}
             */
            get fighterCount() {
                console.log(this.data.length);
                return this.data.length;
            },
            /**
             * addFighter
             *  Adds a new fighter record and returns the updated record set
             *   $timeout is used to simulate an async Ajax call
             *
             * @returns {Promise|JSON}
             */
            addFighter: action((fighterObj) => {
                console.log(fighterObj)
                const defer = this.$q.defer();
                this.$timeout(() => {
                    this.data = [...this.data, fighterObj];
                    defer.resolve(this.data);
                }, 10);
                return defer.promise;
            }),
            /**
             * updateFighter
             *  Updates an existing fighter record and returns the updated record set
             *   $timeout is used to simulate an async Ajax call
             *
             * @returns {Promise|JSON}
             */
            updateFighter: action((fighterObj) => {
                const defer = this.$q.defer();
                this.$timeout(() => {
                    this.data = this.data.map(fighter => {
                        if (fighter.id === fighterObj.id) {
                            return fighterObj;
                        } else {
                            return fighter;
                        }
                    });
                    defer.resolve(this.data);
                }, 10);
                return defer.promise;
            })
        });
    }

    /**
     * getFighter
     *  Retrieves the complete list of fighters
     *
     * @returns {Promise|JSON}
     */
    getFighters() {
        const defer = this.$q.defer();
        this.$timeout(()=> {
            this.data = fighterData.data;
            defer.resolve(this.data);
        }, 10);
        return defer.promise;
    }

    /**
     * getFighterByID
     *  Retrieves and returns fighter data based upon ID passed in
     *
     * @param id {Number}
     * @returns {Object}
     */
    getFighterById(id) {
        return this.data.filter(fighter => fighter.id === id)[0];
    }

    /**
     * getWeightClasses
     *  Returns an array of fighter weight classes
     *
     * @returns {Array}
     */
    getWeightClasses() {
        return this.weightClasses;
    }

}

export default FighterService;