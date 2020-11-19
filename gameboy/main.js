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
    const btnON = document.querySelector( `.btn-on` );
    const btnOFF = document.querySelector( `.btn-off` );
    const lamp = document.querySelector( `.lamp` );
    const logo = document.querySelector( `.logo` );

    // Turn ON
    btnON.onclick = function () {

      // Button
      btnON.classList.add( 'btn-hide' );
      btnOFF.classList.remove( 'btn-hide' );

      // lamp Led
      lamp.classList.add( 'lamp-on' );

      // Animate text & play sound
      const transitionEvent = whichTransitionEvent();
      logo.classList.add( 'end' );
      logo.addEventListener( transitionEvent, playSound );
    };


    btnOFF.onclick = function () {

      // Button
      btnON.classList.remove( 'btn-hide' );
      btnOFF.classList.add( 'btn-hide' );

      // lamp Led
      lamp.classList.remove( 'lamp-on' );

      // Text
      logo.classList.remove( 'end' );
    };

  }
};

App.init();