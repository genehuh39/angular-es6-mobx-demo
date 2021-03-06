class FighterFormController {
    constructor(FighterService) {
        this.FighterService = FighterService;
    }

    $onInit() {
        this.fighter = this.FighterService.getFighterById(this.resolve.fighterId) || {};
        this.formData = Object.assign({}, this.fighter);
        this.weightClasses = this.FighterService.getWeightClasses();
    }

    /**
     * close
     *  Triggered by the click event on the modal close button
     */
    close() {
        this.modalInstance.dismiss('cancel');
    }

    /**
     * undo
     *  Triggered by the click event on the undo link
     */
    undo() {
        this.modalInstance.dismiss('undo');
    }

    /**
     * confirm
     *  Triggered by the click event on the modal 'ok' button
     */
    confirm() {
        if (this.resolve.fighterId === null) {
            this.FighterService.addFighter(this.formData).then(() => {
                this.modalInstance.close('confirm');
            })
        } else {
            this.FighterService.updateFighter(this.formData).then(()=> {
                this.modalInstance.close('confirm');
            });
        }
    }
}

export default FighterFormController;