import $ from 'jquery';
import "./index.html";
import "./assets/styles/styles.pcss";
import "./assets/styles/reset.pcss";
import MobileMenu from "./assets/modules/MobileMenu"


$(document).ready(function () {
    let mobileMenu = new MobileMenu(".burger-menu", "active");

});

