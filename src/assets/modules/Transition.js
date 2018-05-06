export default class Transition {
    constructor(element, className) {
        if (typeof element === "string") {
            this.element = document.querySelector(element);
        } else {
            this.element = element;
        }

        this.className = className;
        this.isOpen = false;
        this.element.addEventListener("transitionend", () => {
            if (!this.isOpen) {
                console.log(this.isOpen);
                this.element.style.display = "none";
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.element.style.display = "";
        }

        setImmediate(() => {
            this.element.classList.toggle(this.className, this.isOpen);
        });
    }

    //for popups & etc... > only adding a class after click to element, to close - need to click another element
    addClass() {
        this.isOpen = true;

        if (this.isOpen) {
            this.element.style.display = "";
        }

        setImmediate(() => {
            this.element.classList.add(this.className);
        });
    }

    removeClass() {
        this.isOpen = false;

        setImmediate(() => {
            this.element.classList.remove(this.className);
        });
    }
}
