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

let darkModeFlg = true;
function darkModeShift() {
    darkModeFlg = !darkModeFlg;
    if (!darkModeFlg) {
        MENU_LINKS.forEach(contents => {
            document.getElementById(contents).style.backgroundColor = "rgb(200, 200, 200)";
            document.getElementById(contents).getElementsByClassName("contents")[0].style.color = "#111";
        });
        if (window.innerWidth > 768) {
            let menuCount = 0;
            while (menuCount < document.getElementsByClassName("menu-container")[0].getElementsByTagName("a").length) {
                document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].style.color = "#111";
                document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].addEventListener('mouseover', function() {
                    this.style.color = "#00C6A7";
                })
                document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].addEventListener('mouseout', function() {
                    this.style.color = "#111";
                })
                menuCount++;
            }
        }
        let worksCount = 0;
        while (worksCount < document.getElementsByClassName("works-text").length) {
            document.getElementsByClassName("works-text")[worksCount].style.color = "black";
            worksCount++;
        }
        let aboutCount = 0;
        while (aboutCount < document.getElementsByClassName("link-text").length) {
            document.getElementsByClassName("link-text")[aboutCount].style.color = "black";
            document.getElementsByClassName("link-text")[aboutCount].addEventListener('mouseover', function() {
                this.style.color = "#00C6A7";
            })
            document.getElementsByClassName("link-text")[aboutCount].addEventListener('mouseout', function() {
                this.style.color = "#111";
            })
            aboutCount++;
        }
        let thanksCount = 0;
        while (thanksCount < document.getElementsByClassName("thanks-link").length) {
            document.getElementsByClassName("thanks-link")[thanksCount].style.color = "#111";
            thanksCount++;
        }
    } else {
        MENU_LINKS.forEach(contents => {
            document.getElementById(contents).style.backgroundColor = "black";
            document.getElementById(contents).getElementsByClassName("contents")[0].style.color = "#e1dfdf";
        });
        let menuCount = 0;
        while (menuCount < document.getElementsByClassName("menu-container")[0].getElementsByTagName("a").length) {
            document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].style.color = "";
            document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].addEventListener('mouseover', function() {
                this.style.color = "#00C6A7";
            })
            document.getElementsByClassName("menu-container")[0].getElementsByTagName("a")[menuCount].addEventListener('mouseout', function() {
                this.style.color = "#e1dfdf";
            })
            menuCount++;
        }
        let worksCount = 0;
        while (worksCount < document.getElementsByClassName("works-text").length) {
            document.getElementsByClassName("works-text")[worksCount].style.color = "white";
            worksCount++;
        }
        let aboutCount = 0;
        while (aboutCount < document.getElementsByClassName("link-text").length) {
            document.getElementsByClassName("link-text")[aboutCount].style.color = "";
            document.getElementsByClassName("link-text")[aboutCount].addEventListener('mouseover', function() {
                this.style.color = "#00C6A7";
            })
            document.getElementsByClassName("link-text")[aboutCount].addEventListener('mouseout', function() {
                this.style.color = "";
            })
            aboutCount++;
        }
        let thanksCount = 0;
        while (thanksCount < document.getElementsByClassName("thanks-link").length) {
            document.getElementsByClassName("thanks-link")[thanksCount].style.color = "";
            thanksCount++;
        }
    }
}
