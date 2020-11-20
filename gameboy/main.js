const App = {
  init: function () {
    App.animate();
  },

  animate: function () {

    // From Modernizr
    function whichTransitionEvent () {
      let t;
      const el = document.createElement( 'fake' );
      const transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

      for ( t in transitions ) {
        if ( el.style[ t ] !== undefined ) {
          return transitions[ t ];
        }
      }
    }

    // Play Sound
    function playSound () {
      console.log( 'Play sound!' );
      audio.currentTime = 0;
      audio.play();
    }

    const audio = document.querySelector( `audio` );
    const buttonON = document.querySelector( `.button-on` );
    const buttonOFF = document.querySelector( `.button-off` );
    const lamp = document.querySelector( `.lamp` );
    const logo = document.querySelector( `.logo` );

    // Turn ON
    buttonON.onclick = function () {

      // Button
      buttonON.classList.add( 'button-hide' );
      buttonOFF.classList.remove( 'button-hide' );

      // lamp Led
      lamp.classList.add( 'lamp-on' );

      // Animate text & play sound
      const transitionEvent = whichTransitionEvent();
      logo.classList.add( 'end' );
      logo.addEventListener( transitionEvent, playSound );
    };


    buttonOFF.onclick = function () {

      // Button
      buttonON.classList.remove( 'button-hide' );
      buttonOFF.classList.add( 'button-hide' );

      // lamp Led
      lamp.classList.remove( 'lamp-on' );

      // Text
      logo.classList.remove( 'end' );
    };

  }
};

App.init();