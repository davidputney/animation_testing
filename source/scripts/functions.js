
var pageFunctions = {
    intialize: function () {
      console.log('works');
      var self=this;
      self.intializeWatchers(); //listens for clicks
      self.imagePreload();
      // self.handleAnimations();

    },
    intializeWatchers: function() {
      var self=this;

      var bodyEl = document.querySelector('#empower-body');
      var htmlEl = document.querySelectorAll('HTML');
      var dialog = document.querySelector('#fs-overlay');

      var foo = document.querySelector("#close");
      foo.addEventListener('click', function(e) {
        console.log('click');
        bodyEl.classList.remove('modal-open');
        dialog.classList.remove('active');
        dialog.classList.add('inline');
      });
    },
    handleAnimations: function() {
      var self=this;
      var overlayAppsGrid = document.querySelector('#overlay-apps-grid'),
          heroLogo = document.querySelector('#hero-logo'),
          heroText = document.querySelector('#hero-text'),
          heroSection = document.querySelector('#section-hero'),
          animSection = document.querySelector('#hero-anim-wrapper'),
          windowHeight = window.innerHeight,
          windowWidth = window.innerWidth,
          sectionHeight = document.querySelector('#hero-anim-wrapper').offsetHeight;

      var heroTween = new TimelineMax()
        .to(overlayAppsGrid, 0.8, {scale: 2.5, opacity: 0})
        .to(heroLogo, 0.95, {y:0, ease:Back.easeOut.config(1)}, "-=0.15")
        .from(heroText, 0.95, {opacity:0, y:60}, "=0.25")
        .to(heroText, 0.95, {opacity:1, y:0, ease:Power1.easeOut})
        .set(heroSection, {className:"+=active"}, "-=2");

      var heroAnimScene = new ScrollMagic.Scene({
          triggerElement: heroSection,
          triggerHook: 'onLeave',
          duration: sectionHeight / 2,
        })
      .setPin(heroSection) // the element we want to pin
      .setTween(heroTween);

      // ANIMATION OF WATCH AND BULLET POINTS
      var watchAnimSection = document.querySelector('#watch-anim-section'),
          watchAnimFace = document.querySelector('#watch-anim-face'),
          watchAnimImage = document.querySelector('#watch-anim-image'),
      // list items
          faceOneList = document.querySelector('#face-1-list'),
          faceTwoList = document.querySelector('#face-2-list'),
          faceThreeList = document.querySelector('#face-3-list'),
          faceFourList = document.querySelector('#face-4-list');

      var watchAnimTween = new TimelineMax()
        .to(faceOneList, 0.2, {opacity:1,ease:Power1.easeInOut})
        .set(watchAnimFace, {className:"+=face-1"})
        .to(watchAnimImage, 0.2, {rotation:10,ease:Power1.easeInOut}, "+=0.03")

        .set(watchAnimFace, {className:"-=face-1"})
        .set(watchAnimFace, {className:"+=face-2"})
        .to(faceTwoList, 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to(watchAnimImage, 0.2, {rotation:3,ease:Power1.easeInOut}, "+=0.03")

        .set(watchAnimFace, {className:"-=face-2"})
        .set(watchAnimFace, {className:"+=face-3"})
        .to(faceThreeList, 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to(watchAnimImage, 0.2, {rotation:-5,ease:Power1.easeInOut}, "+=0.03")

        .set(watchAnimFace, {className:"-=face-3"})
        .set(watchAnimFace, {className:"+=face-4"})
        .to(faceFourList, 0.2, {opacity:1,ease:Power1.easeInOut}, "-=0.03")
        .to(watchAnimImage, 0.2, {rotation:-10,ease:Power1.easeInOut}, "+=0.03");

      var watchAnimScene = new ScrollMagic.Scene({
        triggerElement: watchAnimSection,
        triggerHook: 'onLeave',
        duration: '100%',
        // reverse:false
      })
      .setPin(watchAnimSection)
      .setTween(watchAnimTween);

      // ANIMATES LIST ITEMS IN WATCH ARM SECTION
      var watchArmSection = document.querySelector('#section-watch-arm'),
          armListOne = document.querySelector('#arm-1'),
          armListTwo = document.querySelector('#arm-2');

      var watchArmListTween = new TimelineMax()
        .to(armListOne, 0.2, {opacity:1,ease:Power1.easeInOut}, "+=.2")
        .to(armListTwo, 0.2, {opacity:1,ease:Power1.easeInOut}, "+=.2");

      var watchArmScene = new ScrollMagic.Scene({
        triggerElement: watchArmSection,
        triggerHook: 'onLeave',
        duration: '100%'
      })
      .setPin(watchArmSection)
      .setTween(watchArmListTween);

      // FADES IN BG OF WATCH ARM SECTION
      var watchArmBGFade = new TimelineMax()
      .set(watchArmSection, {className:"+=active"});

      var watchArmBGFadeScene = new ScrollMagic.Scene({
      triggerElement: watchArmSection,
      triggerHook: 'onEnter',
      reverse:false
      })
      .setTween(watchArmBGFade);

      // OPENS DIALOG BOX
      var dialogBox = document.querySelector('#fs-overlay'),
          bodyEl = document.querySelector('#empower-body'),
          html = document.querySelectorAll('HTML');

      var dialogOpenTween = new TimelineMax()
        .set(dialogBox, {className:"-=hidden"})
        .set(dialogBox, {className:"+=active"}, "+=.75")
        .set(bodyEl, {className:"+=modal-open"});

      var dialogOpenScene = new ScrollMagic.Scene({
        triggerElement: '#section-overlay',
        triggerHook: 'onEnter',
        reverse:false
      })
        .setTween(dialogOpenTween);

        // FADES IN IMAGE IN THE SOLUTION SECTION
        var origamiImage = document.querySelectorAll('#img-origami');

        var tweenOrigamiImage = new TimelineMax()
          .to(origamiImage, 1.0, {opacity:1,ease:Power1.easeInOut});

        var origamiScene = new ScrollMagic.Scene({
          triggerElement: origamiImage,
          triggerHook: 'onEnter',
          offset: '50%',
          reverse:false
        })
          .setTween(tweenOrigamiImage);

      var controller = new ScrollMagic.Controller();
      controller.addScene([
        heroAnimScene,
        watchAnimScene,
        watchArmScene,
        watchArmBGFadeScene,
        dialogOpenScene,
        origamiScene
      ]);

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
    }
  };
