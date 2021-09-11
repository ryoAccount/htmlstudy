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
const MENU_LINK_A_TAGS = document
  .getElementsByClassName('menu-container')[0]
  .getElementsByTagName('a');
const LINK_TEXTS = document.getElementsByClassName('link-text');
const CATEGORY_AREAS = document.getElementsByClassName('category-area');
const THANKS_LINKS = document.getElementsByClassName('thanks-link');

function darkModeShift() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    MENU_LINKS.forEach((contents) => {
      document.getElementById(contents).style.backgroundColor = 'black';
      document.getElementById(contents).getElementsByClassName('contents')[0].style.color =
        '#e1dfdf';
    });

    let menuCount = 0;
    while (menuCount < MENU_LINK_A_TAGS.length) {
      MENU_LINK_A_TAGS[menuCount].style.color = '';
      MENU_LINK_A_TAGS[menuCount].addEventListener('mouseover', function () {
        this.style.color = '#00C6A7';
      });
      MENU_LINK_A_TAGS[menuCount].addEventListener('mouseout', function () {
        this.style.color = '#e1dfdf';
      });
      menuCount++;
    }

    let linkCount = 0;
    while (linkCount < LINK_TEXTS.length) {
      LINK_TEXTS[linkCount].style.color = '';
      linkCount++;
    }

    let skillCount = 0;
    while (skillCount < CATEGORY_AREAS.length) {
      CATEGORY_AREAS[skillCount].style.borderLeft = 'solid 2px white';
      skillCount++;
    }

    let thanksCount = 0;
    while (thanksCount < THANKS_LINKS.length) {
      THANKS_LINKS[thanksCount].style.color = '';
      thanksCount++;
    }
  } else {
    MENU_LINKS.forEach((contents) => {
      document.getElementById(contents).style.backgroundColor = 'rgb(200, 200, 200)';
      document.getElementById(contents).getElementsByClassName('contents')[0].style.color = '#111';
    });

    if (window.innerWidth > 768) {
      let menuCount = 0;
      while (menuCount < MENU_LINK_A_TAGS.length) {
        MENU_LINK_A_TAGS[menuCount].style.color = '#111';
        MENU_LINK_A_TAGS[menuCount].addEventListener('mouseover', function () {
          this.style.color = '#00C6A7';
        });
        MENU_LINK_A_TAGS[menuCount].addEventListener('mouseout', function () {
          this.style.color = '#111';
        });
        menuCount++;
      }
    }

    let linkCount = 0;
    while (linkCount < LINK_TEXTS.length) {
      LINK_TEXTS[linkCount].style.color = 'black';
      linkCount++;
    }

    let skillCount = 0;
    while (skillCount < CATEGORY_AREAS.length) {
      CATEGORY_AREAS[skillCount].style.borderLeft = 'solid 2px black';
      skillCount++;
    }

    let thanksCount = 0;
    while (thanksCount < THANKS_LINKS.length) {
      THANKS_LINKS[thanksCount].style.color = '#111';
      thanksCount++;
    }
  }
}
