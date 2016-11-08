
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

      var tweenTwo = new TimelineMax()
        .to('#face-1-list', 0.2, {opacity:1,ease:Power1.easeInOut})
        .set("#watch-anim-face", {className:"+=face-1"})
        .to('#watch-anim-image', 0.2, {rotation:10,ease:Power1.easeInOut}, "+=0.03")


        // .from('#watch-anim-image', 0.01, {rotation: 0})
        .set("#watch-anim-face", {className:"-=face-1"})
        .set("#watch-anim-face", {className:"+=face-2"})
        .to('#face-2-list', 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to('#watch-anim-image', 0.2, {rotation:0,ease:Power1.easeInOut}, "+=0.03")

        .set("#watch-anim-face", {className:"-=face-2"})
        .set("#watch-anim-face", {className:"+=face-3"})
        .to('#face-3-list', 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to('#watch-anim-image', 0.2, {rotation:-10,ease:Power1.easeInOut}, "+=0.03")


        .set("#watch-anim-face", {className:"-=face-3"})
        .set("#watch-anim-face", {className:"+=face-4"})
        .to('#face-4-list', 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to('#watch-anim-image', 0.2, {rotation:-20,ease:Power1.easeInOut});


      var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#section-3',
        triggerHook: 'onLeave',
        duration: sectionHeightTwo,
        reverse:true
      })
      .setPin('#section-3')
      .setTween(tweenTwo);


      controller.addScene([
        scene
        // scene2,
        sceneTwo
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
