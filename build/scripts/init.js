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

	var content = $('.content');
	content.fadeIn();


	/*==========  ANIMATOR  ==========*/
	
	var
		titlePath = $('.titleContainer path')
		,contentAnimator = $('#contentAnimation > .animation')
		,placeAnimator = $('#placeAnimation > .animation')
		,titleTimline = new TimelineMax()
		,contentTimeline = new TimelineMax({paused:true})
		,placeTimeline = new TimelineMax({paused:true})
	;

	titlePath.each(function(i, e) {
		e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
	});

	function consolelog() {
		console.log('callback added!');
	}

	function titleAnimation() {
		titleTimline.add([
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
	}

	// var tn1 to use stagger mode
	//var tn1 = new TweenMax.staggerFrom(contentAnimator, 1, {autoAlpha:0, top:100, ease:Back.easeOut, paused:true}, 1);
	function contentAnimation() {
		//$.each(tn1, function(){this.play();})
		$.each(contentAnimator, function() {
			contentTimeline.fromTo($(this), 1,{autoAlpha:0, top:100}, {display: 'block', autoAlpha:1, top:0, ease:Back.easeOut});
		});
		contentTimeline.play(0);
	}

	function placeAnimation() {
		placeTimeline.fromTo(placeAnimator, 1,{autoAlpha:0, top:100}, {display: 'block', autoAlpha:1, top:0, ease:Back.easeOut});
		placeTimeline.play(0);
	}


	// run title animation
	titleAnimation();
	// when title animation done
	titleTimline.eventCallback("onComplete", contentAnimation);
	contentTimeline.eventCallback("onComplete", placeAnimation);


});
// end ready

/*-----  End of DOCUMENT READY FIRE FUNCTIONS  ------*/