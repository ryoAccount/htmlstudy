window.onload = () => {
    const lamp = document.querySelector('.lamp');
    const logo = document.querySelector('.logo');
    const se = document.querySelector('.se');
    const onoff = document.querySelector('.switch');

    let isStart = false;
    let timer = 0;

    onoff.addEventListener('click', () => {
        if(isStart) {
            // ON -> OFF
            lamp.classList.remove('lamp-on');
            logo.classList.remove('disp');
            onoff.classList.remove('on');

            window.clearTimeout(timer);
        } else {
            // OFF -> ON
            lamp.classList.add('lamp-on');
            logo.classList.add('disp');
            onoff.classList.add('on');

            timer = window.setTimeout(() => {
                se.currentTime = 0;
                se.play();
            }, 3000);
        }
        isStart = !isStart;
    });
}

