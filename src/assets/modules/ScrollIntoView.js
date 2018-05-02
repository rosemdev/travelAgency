export default function ScrollIntoView() {
    let navigation = document.querySelector("nav ul");


    navigation.addEventListener("click", function (event) {
        let sections = document.querySelectorAll(".section"),
            menuItems = navigation.querySelectorAll("li"),
            clickedItem = event.target.closest("li");

        for (let i = 0; i < sections.length; i++) {
            let section = sections[i],
                menuItem = menuItems[i];

            let offset = 30,
                coordToScroll = section.getBoundingClientRect().top - offset;

            if (clickedItem === menuItem) {
                window.scrollBy({
                    behavior: "smooth",
                    top: coordToScroll,
                    left: 0
                });
            }
        }
    });

}
//alternative option
// ({section.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
