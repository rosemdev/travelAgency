import $ from 'jquery'
import ScrollReveal from "../../../node_modules/scrollreveal/dist/scrollreveal.min"



export default class RevealOnScroll {
    constructor (elementSelector, options) {
        this.element = $(elementSelector);
        this.options = options;
        this.createReveal.call(this);
    }




    createReveal () {
       this.element.each((index, item) => {
           console.log(item);
           RevealOnScroll.sr.reveal(item, this.options);
       });
    }

}

        RevealOnScroll.sr = ScrollReveal({
            // opacity: 0,
            // scale: 0.5,
            // reset: false,
            // viewOffset: {top: 48},
            // easing: 'cubic-bezier(0.68, 0.02, 0.82, 0.99)',
        });
