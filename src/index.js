import $ from 'jquery';
import "./index.html";
import "./assets/styles/styles.pcss";
import "./assets/styles/reset.pcss";
import MobileMenu from "./assets/modules/MobileMenu"
import RevealOnScroll from "./assets/modules/RevealOnScroll"


$(document).ready(function () {
    let mobileMenu = new MobileMenu(".burger-menu", "active");

    let revealOnScroll = new RevealOnScroll();

});

