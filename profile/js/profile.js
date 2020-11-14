const VANTA_TARGET_NUMBER = Math.floor(Math.random() * 10);
const WORKS_TARGET_NUMBER = Math.floor(Math.random() * 10) % 3;
const MENU_LINKS = ['home', 'works', 'about', 'thanks'];

window.onload = onloadScript();

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


function onloadScript() {
    switch(VANTA_TARGET_NUMBER) {
        case 0:
        case 1:
            vantaLoadScript("js/vanta/vanta.net.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 2:
        case 3:
            vantaLoadScript("js/vanta/vanta.globe.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 4:
        case 5:
            vantaLoadScript("js/vanta/vanta.dots.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 6:
        case 7:
            vantaLoadScript("js/vanta/vanta.rings.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 8:
        case 9:
        default:
            vantaLoadScript("js/vanta/vanta.halo.min.js", function() {
                vantaSubmitScript();
            });
    }

    if (window.innerWidth >= 768) {
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
        // mobile no laod movie
        // performance is painful
    }
}

function vantaLoadScript(src, callback) {
    let done = false;
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function() {
        if ( !done && (!this.readyState ||
                this.readyState === "loaded" || this.readyState === "complete") ) {
            done = true;
            callback();
            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;
            if ( head && script.parentNode ) {
                head.removeChild( script );
            }
        }
    };
}

function vantaSubmitScript() {
    switch(VANTA_TARGET_NUMBER) {
        case 0:
        case 1:
            VANTA.NET({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00
            })
            break;
        case 2:
        case 3:
            VANTA.GLOBE({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00
            })
            break;
        case 4:
        case 5:
            VANTA.DOTS({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x9a91e3,
                color2: 0x2ec272
            })
            break;
        case 6:
        case 7:
            VANTA.RINGS({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x1e212f,
                color: 0x76cc13
            })
            break;
        case 8:
        case 9:
        default:
            VANTA.HALO({
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                baseColor: 0xc01079,
                backgroundColor: 0x1e212f,
                amplitudeFactor: 1.50,
                size: 1.50
            })
    }
}

function loadMovie(src) {
    const video = document.getElementsByTagName('video')[0];
    const source = document.createElement('source');
    source.src = src;
    video.appendChild(source);
}