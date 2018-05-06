import $ from 'jquery'
import ScrollReveal from "scrollreveal"

export default class RevealOnScroll {
    constructor (elementSelector, options, sequence) {
        this.element = $(elementSelector);
        this.options = options;
        this.sequence = sequence;
        this.createReveal();
    }

    createReveal () {
       RevealOnScroll.scrollReveal.reveal(this.element, this.options, this.sequence);
    }

}

RevealOnScroll.scrollReveal = ScrollReveal();
