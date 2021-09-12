const MENU_LINKS = ['home', 'works', 'about', 'thanks'];

function clickMenuLink(menu) {
  MENU_LINKS.forEach((menuLink) => {
    if (menu === menuLink) {
      document.getElementById(menu).style.zIndex = 1;
      document.getElementById(menu).style.visibility = 'visible';
    } else {
      document.getElementById(menuLink).style.zIndex = 0;
      document.getElementById(menuLink).style.visibility = 'hidden';
    }
  });

  document.getElementById('burger').checked = false;
}

let isDarkMode = true;
function darkModeShift() {
  isDarkMode = !isDarkMode;

  const backgroundColor = isDarkMode ? '#010101' : '#e1dfdf';
  const fontColor = isDarkMode ? '#e1dfdf' : '#010101';

  MENU_LINKS.forEach((contents) => {
    document.getElementById(contents).style.backgroundColor = backgroundColor;
    document.getElementById(contents).getElementsByClassName('contents')[0].style.color = fontColor;
  });

  if (window.innerWidth > 768) {
    Array.from(
      document.getElementsByClassName('menu-container')[0].getElementsByTagName('a')
    ).forEach((a) => {
      a.style.color = fontColor;
      a.addEventListener('mouseover', function () {
        this.style.color = '#00C6A7';
      });
      a.addEventListener('mouseout', function () {
        this.style.color = fontColor;
      });
    });
  }

  Array.from(document.getElementsByClassName('link-text')).forEach((text) => {
    text.style.color = fontColor;
  });

  Array.from(document.getElementsByClassName('category-area')).forEach((area) => {
    area.style.borderColor = fontColor;
  });

  Array.from(document.getElementsByClassName('thanks-link')).forEach((link) => {
    link.style.color = fontColor;
  });
}
