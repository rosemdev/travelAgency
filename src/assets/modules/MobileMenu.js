import $ from 'jquery';
import Transition from './Transition'


export default class MobileMenu {
    constructor(menuIcon, className) {
        if (typeof menuIcon === "string") {
            this.menuIcon = $(menuIcon);

        } else {
            this.menuIcon = menuIcon;
        }


        this.transition = new Transition("nav", className);
        this.events();

        document.addEventListener('click', this.closeMenu.bind(this));

    }

    events() {
        this.menuIcon.click(() => {

            this.transition.toggle();
            this.menuIcon.toggleClass('cross');
        });

    }

    closeMenu() {
        if (this.transition.element.classList.contains("active") && this.menuIcon.hasClass('cross')) {
            this.transition.removeClass();
            this.menuIcon.removeClass('cross');

        }
    }
}