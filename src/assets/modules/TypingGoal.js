export default class TypingGoal {
    constructor (options) {
        this.contentBlock = document.querySelector(options.contentBlock);
        this.content = options.content;
        this.speed = options.speed;
        this.currentCharacterIndex = 0;
        this.typeWriter.call(this);

    }

    typeWriter () {
        if (this.currentCharacterIndex < this.content.length) {
            this.contentBlock.innerHTML += this.content.charAt(this.currentCharacterIndex);
            this.currentCharacterIndex++;
            // function () {} ======== () => {}
            setTimeout(() => this.typeWriter(), this.speed);
        }
    }
}