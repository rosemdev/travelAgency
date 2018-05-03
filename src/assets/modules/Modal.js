import Transition from "./Transition";

export default class Modal {
    constructor (options) {

        this.modal = document.querySelector(options.modal);
        this.openButton = document.querySelector(options.openButton);
        this.closeButton = document.querySelector(options.closeButton);

        this.transition = new Transition(options.modal, options.opened);
        this.events();
        
        // console.log(this.openButton);

    }


    events() {
    //open modal

        this.openButton.addEventListener("click", this.openModal.bind(this));


    // close modal
        this.closeButton.addEventListener("click", this.closeModal.bind(this));
    // escape button to close modal
    }

    openModal () {
        event.preventDefault();
        this.transition.toggle();
    }

    closeModal () {
        event.preventDefault();
        this.transition.toggle();

    }


}