import fighterData from './mock.json';

class FighterService {
    constructor($timeout, $q) {
        'ngInject';

        this.$timeout = $timeout;
        this.$q = $q;
        this.weightClasses = ['Heavy', '205', '185', '170', '155', '145', '135', '125', '115'];
        this.data = [];
        this.fighterCount = this.data.length;
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

    /**
     * calculateFighterQuotients
     *  Compute the fighter scores for every fighter
     *
     * @param fighterData
     * @returns {JSON}
     */
    calculateFighterQuotients(fighterData) {
        return fighterData.map((fighter) => {
            const total = fighter.groundGame + fighter.rangeStriking + fighter.boxing + fighter.wrestling
                + fighter.clinch || 0;
            fighter.fighterQuotient = (total/5).toFixed(2);
            return fighter;
        });
    }


    /**
     * addFighter
     *  Adds a new fighter record and returns the updated record set
     *   $timeout is used to simulate an async Ajax call
     *
     * @param fighterObj {JSON}
     * @returns {Promise|JSON}
     */
    addFighter(fighterObj) {
        const defer = this.$q.defer();
        fighterObj.id = this.getFighterCount() + 1;
        console.log(fighterObj.id)
        this.$timeout(() => {
            this.data = [...this.data, fighterObj];
            defer.resolve(this.data);
        }, 10);
        return defer.promise;
    }

    /**
     * updateFighter
     *  Updates an existing fighter record and returns the updated record set
     *   $timeout is used to simulate an async Ajax call
     *
     * @param fighterObj {JSON}
     * @returns {Promise|JSON}
     */
    updateFighter(fighterObj) {
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
    }

    /**
     * deleteFighter
     *  Deletes a fighter record by ID
     *
     * @param fighterId {Number}
     * @returns {Promise|JSON}
     */
    deleteFighter(fighterId) {
        const defer = this.$q.defer();
        this.$timeout(() => {
            this.data = this.data.filter(fighter => fighter.id !== fighterId);
            defer.resolve(this.data);
        }, 10);
        return defer.promise;
    }

    /**
     * fighterCount
     *  Computed function to return the total number of fighters
     *
     * @returns {Number}
     */
    getFighterCount() {
        return this.data.length;
    }

}

export default FighterService;