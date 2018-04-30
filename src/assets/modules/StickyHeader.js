export default function stickyHeader() {
    let header = document.querySelector(".menu");


    if (window.pageYOffset > 80) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");

    }




    window.addEventListener("scroll", stickyHeader);


}


