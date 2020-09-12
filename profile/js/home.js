const VANTA_TARGET_NUMBER = Math.floor(Math.random() * 10);

window.onload = vantaLoadScript();

function vantaLoadScript() {
    switch(VANTA_TARGET_NUMBER) {
        case 0:
        case 1:
            loadScript("js/vanta/vanta.net.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 2:
        case 3:
            loadScript("js/vanta/vanta.globe.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 4:
        case 5:
            loadScript("js/vanta/vanta.dots.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 6:
        case 7:
            loadScript("js/vanta/vanta.rings.min.js", function() {
                vantaSubmitScript();
            });
            break;
        case 8:
        case 9:
        default:
            loadScript("js/vanta/vanta.halo.min.js", function() {
                vantaSubmitScript();
            });
    }
}

function loadScript(src, callback) {
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

function homeMenuLink() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("works").style.display = "none";

    document.getElementById("burger").checked = false;
}