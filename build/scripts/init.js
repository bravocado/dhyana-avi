
/*=======================================
=            EXISTS FUNCTION            =
=======================================*/

// for checking if the element exists or not
$.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {
		callback.call(this, args);
	}
	return this;
};

/*-----  End of EXISTS FUNCTION  ------*/




/*=====================================================
=            DOCUMENT READY FIRE FUNCTIONS            =
=====================================================*/

$(document).ready(function() {

	/*==========  FADEIN CONTENT  ==========*/
	var content = $('.content');
	content.fadeIn();

	/*==========  GLOBAL VARS  ==========*/
	var
		vh = window.innerHeight
		,titleContainer = $('.titleContainer')
		,titlePath = $('.titleContainer path')
	;

	/*==========  SVG PATH DETECT  ==========*/
	titlePath.each(function(i, e) {
		e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
	});

	/*==========  DEBUG FUNCTION  ==========*/
	function consolelog() {
		console.log('callback added!');
	}
	function callback (event) {
		console.log("Event fired! (" + event.type + ")");
	}

	// var tn1 to use stagger mode
	//var tn1 = new TweenMax.staggerFrom(contentAnimator, 1, {autoAlpha:0, top:100, ease:Back.easeOut, paused:true}, 1);
	//function contentAnimation() {
		//$.each(tn1, function(){this.play();})
		//TweenLite.to(titleContainer, 1,{top:0,ease:Back.easeOut}),
	//}

	//function placeAnimation() {
		//placeTimeline.fromTo(placeAnimator, 1,{autoAlpha:0, top:100}, {display: 'block', autoAlpha:1, top:0, ease:Back.easeOut});
		//placeTimeline.play(0);
	//}

	/*==========  ADJUST HEIGHT ON LAYER  ==========*/
	$('.layer').each(function(){
		if($(this).hasClass('adjustHeight')) {
			$(this).css('height', vh);
		}
	});


	/*==========  ANIMATION USING FUNCTION  ==========*/
	function arrowShow(){
		TweenLite.fromTo('.bottom-arrow', 1, {
			autoAlpha:0,
			bottom: -200
		}, {
			autoAlpha:1,
			bottom: 0,
			delay: 1,
			ease:Back.easeOut
		});
	}

	function arrowHide(){
		TweenLite.fromTo('.bottom-arrow', 1, {
			autoAlpha:1,
			bottom: 0
		}, {
			autoAlpha:0,
			bottom: 200,
			delay: 1,
			ease:Back.easeOut
		});
	}

	function aviAndLilyShow() {
		console.log('avi and lily show');
		// var contentAnimation = new TimelineMax({pause:true});
		// contentAnimation.add([
		// 	TweenLite.fromTo('.contentLeft', 1, {
		// 		autoAlpha:0
		// 	}, {
		// 		autoAlpha:1,
		// 		delay: 1,
		// 		ease:Back.easeOut
		// 	}),
		// 	TweenLite.fromTo('#weddingScene', 1, {
		// 		autoAlpha: 0,
		// 		rotationX:90,
		// 		transformOrigin:"center bottom"
		// 	}, {
		// 		autoAlpha: 1,
		// 		delay: 1.5,
		// 		rotationX:0,
		// 		transformOrigin:"center bottom",
		// 		ease:Back.easeOut
		// 	}),
		// 	TweenLite.fromTo('.contentRight', 1, {
		// 		autoAlpha:0
		// 	}, {
		// 		autoAlpha:1,
		// 		delay: 1.2,
		// 		ease:Back.easeOut
		// 	}),
		// ]);
	}


	/*==========  ANIMATION USING VARS  ==========*/
	//helloworld animation
	var helloFromUs = new TimelineMax();
	helloFromUs.add([
		TweenLite.fromTo('.bottom-arrow', 1, {
			autoAlpha:0,
			bottom: -200
		}, {
			autoAlpha:1,
			bottom: 0,
			delay: 1,
			ease:Back.easeOut
		}),
		TweenLite.fromTo('.helloFromUs', 1, {
			autoAlpha:0,
			top: 300
		}, {
			autoAlpha:1,
			top: 0,
			delay: 1.2,
			ease:Back.easeOut
		}),
		TweenLite.fromTo('.helloMsg', 1, {
			autoAlpha:0,
			top: 300
		}, {
			autoAlpha:1,
			top: 0,
			delay: 1.3,
			ease:Back.easeOut
		}),
	]);

	// title animation
	var titleAnimation = new TimelineMax();
	titleAnimation.add([
		TweenLite.to(titlePath.eq(0), 2, {
			strokeDashoffset: 0,
			delay: 0,
			fillOpacity: 1,
		}),
		TweenLite.to(titlePath.eq(1), 2, {
			strokeDashoffset: 0,
			delay: 0,
			fillOpacity: 1,
		}),
		TweenLite.to(titlePath.eq(2), 2, {
			strokeDashoffset: 0,
			delay: 0,
			fillOpacity: 1,
		}),
		// curve line
		TweenLite.to(titlePath.eq(3), 2, {
			strokeDashoffset: 0,
			delay: 2,
			fillOpacity: 1,
		}),
		TweenLite.to(titlePath.eq(4), 2, {
			strokeDashoffset: 0,
			delay: 2.2,
		}),
		TweenLite.to(titlePath.eq(5), 2, {
			strokeDashoffset: 0,
			delay: 2,
		}),
		TweenLite.to(titlePath.eq(6), 2, {
			strokeDashoffset: 0,
			delay: 2.2,
			fillOpacity: 1,
		}),
		// dhyana&avi
		TweenLite.to([titlePath.eq(7), titlePath.eq(8), titlePath.eq(8), titlePath.eq(9), titlePath.eq(10), titlePath.eq(11), titlePath.eq(12), titlePath.eq(13), titlePath.eq(14), titlePath.eq(15), titlePath.eq(16)], 2, {
			strokeDashoffset: 0,
			delay: 2.4,
			fillOpacity: 1,
		}),
		// bottomdecor
		TweenLite.to(titlePath.eq(24), 2, {
			strokeDashoffset: 0,
			delay: 2.8,
			fillOpacity: 1,
		}),
		TweenLite.to(titlePath.eq(25), 2, {
			strokeDashoffset: 0,
			delay: 2.8,
			fillOpacity: 1,
		}),
		// jakarta
		TweenLite.to([titlePath.eq(17),titlePath.eq(18),titlePath.eq(19),titlePath.eq(20),titlePath.eq(21),titlePath.eq(22),titlePath.eq(23)], 2, {
			strokeDashoffset: 0,
			delay: 2.4,
			fillOpacity: 1,
		}),
		//left and right decor at bottom
		TweenLite.to([titlePath.eq(26),titlePath.eq(27),titlePath.eq(28),titlePath.eq(29),titlePath.eq(30),titlePath.eq(31)], 2, {
			strokeDashoffset: 0,
			delay: 3,
			fillOpacity: 1,
		}),
	]);
	titleAnimation.eventCallback("onComplete", aviAndLilyShow);

	// content animation
	var contentAnimation = new TimelineMax();
	contentAnimation.add([
		TweenLite.fromTo('#weddingScene', 1, {
			autoAlpha: 0,
			rotationX:90,
			transformOrigin:"center bottom"
		}, {
			autoAlpha: 1,
			delay: 1.5,
			rotationX:0,
			transformOrigin:"center bottom",
			ease:Back.easeOut
		}),
	]);

	var contentAnimation2 = new TimelineMax();
	contentAnimation2.add([
		TweenMax.staggerFromTo(".contentLeft img", 0.7,{
			opacity: 0,
			bottom: -100 
		}, {
			opacity: 1,
			bottom: 0,
			delay:0.5,
			ease:Back.easeOut,
			visibility: 'visible'
		}, 1),
		TweenMax.staggerFromTo(".contentRight img", 0.7,{
			opacity: 0,
			bottom: -100 
		}, {
			opacity: 1,
			bottom: 0,
			delay:0.5,
			ease:Back.easeOut,
			visibility: 'visible'
		}, 1),
	]);

	var placeAnimation = new TimelineMax();
	placeAnimation.add([
		TweenLite.fromTo('#placeAnimation', 1,{
			autoAlpha: 0,
			rotationX:90,
			transformOrigin:"center bottom"
		}, {
			autoAlpha: 1,
			delay: 0.5,
			rotationX:0,
			transformOrigin:"center bottom",
			ease:Bounce.easeOut
		})
	]);

	
	/*==========  ANIMATOR/SCENES  ==========*/
	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller(
		{
			// globalSceneOptions: {
			// 	triggerHook: 'onLeave'
			// }
		}
	);

	var scene1 = new ScrollMagic.Scene({
		triggerHook: 0,
		triggerElement: '#firstLayer',
		duration: 0
	})
	.addTo(controller)
	.setTween(helloFromUs)
	;

	var scene2 = new ScrollMagic.Scene({
		triggerHook: 0,
		triggerElement: '#secondLayer',
		offset: -250,
		duration: 0
	})
	.addTo(controller)
	.setTween(titleAnimation)
	// .on("enter leave", function (event) {
	// 		console.log("Scene change.");
	// })
	.on("leave", function(){
		arrowShow();
	})
	.on("enter", function(){
		arrowHide();
	});
	;

	var scene3 = new ScrollMagic.Scene({
		triggerHook: 'onEnter',
		triggerElement: '#thirdLayer',
		duration: 0
	})
	.setTween(contentAnimation)
	.addTo(controller);

	var scene4 = new ScrollMagic.Scene({
		triggerHook: 'onEnter',
		triggerElement: '#fourthLayer',
		duration: 0
	})
	.setTween(contentAnimation2)
	.addTo(controller);

	var scene5 = new ScrollMagic.Scene({
		triggerHook: 'onEnter',
		triggerElement: '#fifthLayer',
		duration: 0
	})
	.setTween(placeAnimation)
	.addTo(controller);


});
// end ready

/*-----  End of DOCUMENT READY FIRE FUNCTIONS  ------*/
