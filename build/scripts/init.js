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

	var titlePath = $('.titleContainer path');

	titlePath.each(function(i, e) {
		e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
		console.log(i);
	});

	function consolelog() {
		console.log('callback added!');
	}

	var titleTimline = new TimelineMax();

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
		//curve line
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
		//dhyana&avi
		TweenLite.to([titlePath.eq(7), titlePath.eq(8), titlePath.eq(8), titlePath.eq(9), titlePath.eq(10), titlePath.eq(11), titlePath.eq(12), titlePath.eq(13), titlePath.eq(14), titlePath.eq(15), titlePath.eq(16)], 2, {
			strokeDashoffset: 0,
			delay: 2.4,
			fillOpacity: 1,
		}),
		//bottomdecor
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
			delay: 2.6,
			fillOpacity: 1,
		}),
		TweenLite.to([titlePath.eq(26),titlePath.eq(27),titlePath.eq(28),titlePath.eq(29),titlePath.eq(30),titlePath.eq(31)], 2, {
			strokeDashoffset: 0,
			delay: 3,
			fillOpacity: 1,
		}),
	]);
	titleTimline.eventCallback("onComplete", consolelog);



});
// end ready

/*-----  End of DOCUMENT READY FIRE FUNCTIONS  ------*/