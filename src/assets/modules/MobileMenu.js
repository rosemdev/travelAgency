import $ from 'jquery';
import Transition from './Transition'


export default class MobileMenu {
    constructor(menuIcon, className) {
        if (typeof menuIcon === "string"){
        this.menuIcon = $(menuIcon);

        } else {
            this.menuIcon = menuIcon;
        }


        this.transition = new Transition("nav", className);
        this.events();

    }

    events() {
        this.menuIcon.click(() => {

            this.transition.toggle();
            this.menuIcon.toggleClass('cross');
        });

    }
}