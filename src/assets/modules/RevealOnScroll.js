import $ from 'jquery'
import ScrollReveal from "../../../node_modules/scrollreveal/dist/scrollreveal.min"



export default class RevealOnScroll {
    constructor (elementSelector, options) {
        this.element = $(elementSelector);

        this.createReveal();

    }




    createReveal () {
       let eachBlock = this.element.children();
        RevealOnScroll.sr.reveal(eachBlock);
    }

}
        RevealOnScroll.sr = ScrollReveal({
            opacity: 0,
            scale: 0.5,
            reset: false,
            viewOffset: {top: 48},
            easing: 'cubic-bezier(0.68, 0.02, 0.82, 0.99)',
        });
