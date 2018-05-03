import Transition from "./Transition";

export default class Modal {
    constructor (options) {

        this.modal = document.querySelector(options.modal);
        this.openButtons = document.querySelectorAll(options.openButton);
        this.closeButton = document.querySelector(options.closeButton);
        this.transition = new Transition(options.modal, options.opened);
        this.events();

    }


    events() {
    //open modal

        for (let button of this.openButtons) {
            button.addEventListener("click", this.openModal.bind(this));
        }

    // close modal
        this.closeButton.addEventListener("click", this.closeModal.bind(this));

    // escape button to close modal
    }

    openModal (event) {
        event.preventDefault();
        this.transition.toggle();
    }

    closeModal () {
        event.preventDefault();
        this.transition.toggle();

    }


}