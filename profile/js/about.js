function aboutMenuLink() {
    document.getElementById("home").style.zIndex = 0;
    document.getElementById("home").style.visibility = "hidden";

    document.getElementById("works").style.zIndex = 0;
    document.getElementById("works").style.visibility = "hidden";

    document.getElementById("about").style.zIndex = 1;
    document.getElementById("about").style.visibility = "visible";

    document.getElementById("contact").style.zIndex = 0;
    document.getElementById("contact").style.visibility = "hidden";

    document.getElementById("burger").checked = false;
}