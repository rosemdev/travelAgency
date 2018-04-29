import $ from 'jquery'
import ScrollReveal from "../../../node_modules/scrollreveal/dist/scrollreveal.min"



export default class RevealOnScroll {
    constructor (elementSelector, options, sequence) {
        this.element = $(elementSelector);
        this.options = options;
        this.sequence = sequence;
        this.createReveal.call(this);
    }




    createReveal () {
       this.element.each((index, item) => {
           RevealOnScroll.sr.reveal(item, this.options, this.sequence);
       });
    }

}

        RevealOnScroll.sr = ScrollReveal();
