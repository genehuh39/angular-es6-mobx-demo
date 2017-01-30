class ConfirmController {
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
        this.modalInstance.close('confirm');
    }
}

export default ConfirmController;