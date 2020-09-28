function contactMenuLink() {
    document.getElementById("home").style.zIndex = 0;
    document.getElementById("home").style.visibility = "hidden";

    document.getElementById("works").style.zIndex = 0;
    document.getElementById("works").style.visibility = "hidden";

    document.getElementById("about").style.zIndex = 0;
    document.getElementById("about").style.visibility = "hidden";

    document.getElementById("contact").style.zIndex = 1;
    document.getElementById("contact").style.visibility = "visible";

    document.getElementById("burger").checked = false;
}