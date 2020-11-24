const MENU_LINKS = ['home', 'works', 'about', 'thanks'];

function clickMenuLink(menu) {
    MENU_LINKS.forEach(menuLink => {
        if (menu === menuLink) {
            document.getElementById(menu).style.zIndex = 1;
            document.getElementById(menu).style.visibility = "visible";
        } else {
            document.getElementById(menuLink).style.zIndex = 0;
            document.getElementById(menuLink).style.visibility = "hidden";
        }
    });

    document.getElementById("burger").checked = false;
}
