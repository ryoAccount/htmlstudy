window.onload = () => {
    const SWITCH = document.querySelector('.switch');
    const SE = document.querySelector('.se');
    const LAMP = document.querySelector('.lamp');
    const LOGO = document.querySelector('.logo');

    let isStart = false;
    let timer = 0;

    SWITCH.addEventListener('click', function() {
        if(isStart) {
            // ON -> OFF
            SWITCH.classList.remove('on');
            LOGO.classList.remove('disp');
            LAMP.classList.remove('lamp-on');

            window.clearTimeout(timer);
        } else {
            // OFF -> ON
            SWITCH.classList.add('on');
            LOGO.classList.add('disp');
            LAMP.classList.add('lamp-on');

            timer = window.setTimeout(() => {
                SE.currentTime = 0;
                SE.play();
            }, 3000);
        }
        isStart = !isStart;
    });
}

