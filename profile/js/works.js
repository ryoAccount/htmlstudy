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
    let video = document.getElementsByTagName('video')[0];
    if (window.innerWidth < 768) {
        switch(WORKS_TARGET_NUMBER) {
            case 0:
                video.style.left = "-150px";
                break;
            case 1:
                video.style.left = "-110px";
                break;
            default:
                video.style.left = "-200px";
        }
    }
    let source = document.createElement('source');
    source.src = src;
    video.appendChild(source);
}

function worksMenuLink() {
    document.getElementById("home").style.display ="none";
    document.getElementById("works").style.display ="flex";
}