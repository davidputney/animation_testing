
var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      this.intializeWatchers(); //listens for clicks
      self.imagePreload();

      var sectionHeight = document.querySelector('#anim-section').offsetHeight;

      var sectionHeightTwo = document.querySelector('#section-3').offsetHeight;
      // var sectionHeight2 = document.querySelector('#section-2').offsetHeight;

      var tween = new TimelineMax()
        .to('#my-sticky-element', 0.8, {scale: 2.5, opacity: 0})
        .to('#hero-logo', 0.95, {y:0, ease:Back.easeOut.config(1)}, "-=0.15")
        .from('#hero-text', 0.95, {opacity:0, y:60}, "-=0.25")
        .to('#hero-text', 0.95, {opacity:1, y:0, ease:Power1.easeOut})
        .set("#section-1", {className:"+=active"}, "-=2");

      var controller = new ScrollMagic.Controller();
      var scene = new ScrollMagic.Scene({
        triggerElement: '#section-1',
        triggerHook: 'onLeave',
        duration: sectionHeight / 2,
        reverse:true
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
        scene,
        sceneTwo
      ]);



    },
    intializeWatchers: function() {
      var self=this;


    },
    imagePreload: function() {
      var self=this;
				img1 = new Image();
				img2 = new Image();
				img3 = new Image();
        img4 = new Image();

				img1.src = "/siteart/bg_watch_face_one.png";
				img2.src = "/siteart/bg_watch_face_two.png";
				img3.src = "/siteart/bg_watch_face_three.png";
      	img4.src = "/siteart/bg_watch_face_four.png";
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
