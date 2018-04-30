export  default class HighlightMenuItemOnScroll {
    constructor(options) { //TODO: boundElement
        this.options = options;
        this.sections = document.querySelectorAll(options.sectionSelector);
        this.menuItems = document.querySelectorAll(options.menuItemSelector);
        this.bottomLimitCord = Math.round(document.body.getBoundingClientRect().bottom);
        this.viewportHeight = document.documentElement.clientHeight;
        
        this.highlight();
        window.addEventListener("scroll", this.highlight.bind(this));
    }

    highlight() {
        for (let i = 0; i < this.sections.length; i++) {

            /*Якщо елемент 'доїжджає' до верхньої частини вьюпорта і його координата верхнього лівого
            краю буде менша за висоту хедера(щоб її врахувати при скролі), або нижня координа body
            відносно вьюпорта буде рівна висоті вьюпорта - то підсвітити menuItem, інакше - видалити підсвічування*/

            if (
                Math.trunc(this.sections[i].getBoundingClientRect().top) <= (
                    typeof this.options.offsetTop === 'function' ? this.options.offsetTop() : this.options.offsetTop
                )
                || this.bottomLimitCord === this.viewportHeight
            ) {
                this.menuItems[i].classList.add(this.options.highlightClass);

                if (i !== 0) {
                    this.menuItems[i - 1].classList.remove(this.options.highlightClass);
                }
            } else {
                this.menuItems[i].classList.remove(this.options.highlightClass);
            }
        }
    }
}
