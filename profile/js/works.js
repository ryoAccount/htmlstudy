const WORKS_TARGET_NUMBER = Math.floor(Math.random() * 10) % 3;

window.onload = worksLoadMovie();

function worksLoadMovie() {
    switch(WORKS_TARGET_NUMBER) {
        case 0:
            loadMovie("video/works-background1.mp4");
            break;
        case 1:
            loadMovie("video/works-background2.mp4");
            break;
        default:
            loadMovie("video/works-background3.mp4");
    }
}

function loadMovie(src) {
    const video = document.getElementsByTagName('video')[0];
    if (window.innerWidth < 768) {
        switch(WORKS_TARGET_NUMBER) {
            case 0:
                video.style.left = "-150px";
                break;
            case 1:
                video.style.left = "-110px";
                break;
            default:
                video.style.left = "-350px";
        }
    }
    const source = document.createElement('source');
    source.src = src;
    video.appendChild(source);
}

function worksMenuLink() {
    document.getElementById("home").style.zIndex = 0;
    document.getElementById("home").style.visibility = "hidden";

    document.getElementById("works").style.zIndex = 1;
    document.getElementById("works").style.visibility = "visible";

    document.getElementById("about").style.zIndex = 0;
    document.getElementById("about").style.visibility = "hidden";

    document.getElementById("contact").style.zIndex = 0;
    document.getElementById("contact").style.visibility = "hidden";

    document.getElementById("burger").checked = false;
}