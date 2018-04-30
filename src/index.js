import $ from 'jquery';
import "./index.html";
import "./assets/styles/styles.pcss";
import "./assets/styles/reset.pcss";
import MobileMenu from "./assets/modules/MobileMenu"
import RevealOnScroll from "./assets/modules/RevealOnScroll"
import TypingGoal from "./assets/modules/TypingGoal"
import stickyHeader from "./assets/modules/stickyHeader"


$(document).ready(function () {
    let mobileMenu = new MobileMenu(".burger-menu", "active");

    let revealOnScroll = new RevealOnScroll();

    $(".large-hero >.description").addClass("typing");

    let headerGoalH1 = new TypingGoal({
        contentBlock: ".large-hero >.description > h1",
        content: "Your clarity.",
        speed: 100

    });

    setTimeout(function () {
        let headerGoalH = new TypingGoal({
            contentBlock: ".large-hero >.description > h2",
            content: "One trip away",
            speed: 150
        })
    }, 2000);

    let features = new RevealOnScroll(".feature", {
        scale: 1,
        opacity: 0.25,
        reset: true,
        viewOffset: {top: 50},
        easing: 'cubic-bezier(0.68, 0.02, 0.82, 0.99)',
    }, 200);
    let testimonials = new RevealOnScroll(".user-card", {
        opacity: 0.25,
        scale: 0.8,
        reset: true,
        delay: 2,
    }, 200);
    console.log(testimonials.sequence);


    let header = new stickyHeader();

});