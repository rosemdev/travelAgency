export default function ScrollIntoView() {
    let navigation = document.querySelector("nav ul");


    navigation.addEventListener("click", function (event) {
        let sections = document.querySelectorAll(".section"),
            menuItems = navigation.querySelectorAll("li"),
            links = navigation.querySelectorAll("a"),
            clickedItem = event.target.closest("li");

        for (let i = 0; i < sections.length; i++) {
            let section = sections[i],
                menuItem = menuItems[i],
                link = links[i];

            if (clickedItem === menuItem) {
                section.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
            }
        }
    });

}