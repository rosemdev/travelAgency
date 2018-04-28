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
}
