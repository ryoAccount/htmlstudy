switch(Math.floor(Math.random() * 10)) {
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
        VANTA.CELLS({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x718484,
        color2: 0x1f6d23
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

function homeMenuLink() {
    document.getElementById("home").style.display ="flex";
    document.getElementById("works").style.display ="none";
}