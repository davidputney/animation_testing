
var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      this.intializeWatchers(); //listens for clicks
      // self.scrollFreeze(true);

      var sectionHeight = document.querySelector('#section-1').offsetHeight;
      // var sectionHeight2 = document.querySelector('#section-2').offsetHeight;

      var tween = new TimelineMax()
        .to('#my-sticky-element', 0.8, {scale: 2.5, opacity: 0})
        .to('#hero-logo', 0.95, {y:-400}, "-=0.15");


      var controller = new ScrollMagic.Controller();
      var scene = new ScrollMagic.Scene({
        triggerElement: '#section-1', // starting scene, when reaching this element
        triggerHook: 'onLeave',
        duration: sectionHeight / 4 // pin the element for a total of 400px
      })
      .setPin('#section-1') // the element we want to pin
      .setTween(tween);


      controller.addScene([
        scene
        // scene2,
      ]);



    },
    intializeWatchers: function () {
      var self=this;

    },
    getElemDistance: function ( elem ) {
      var location = 0;
      if (elem.offsetParent) {
        do {
          location += elem.offsetTop;
          elem = elem.offsetParent;
        } while (elem);
      }
      return location >= 0 ? location : 0;
},
  };
