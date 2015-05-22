/*============================================
=            FUNCTION CHECK CLASS            =
============================================*/

// for checking if the element exists or not
$.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {
		callback.call(this, args);
	}
	return this;
};

/*-----  End of FUNCTION CHECK CLASS  ------*/




/*=====================================================
=            DOCUMENT READY FIRE FUNCTIONS            =
=====================================================*/


$(document).ready(function() {

	var svgs = $('svg');
	svgs.show();
	
	new Vivus('topline', {
		type: 'scenario',
		pathTimingFunction: Vivus.LINEAR
	},
		function doDone(obj) {
			obj.el.classList.add('finished');
	});

	new Vivus('title', {
		type: 'delayed',
		duration: 100,
		// animTimingFunction: Vivus.EASE,
		pathTimingFunction: Vivus.LINEAR
	},
		function doDone(obj) {
			obj.el.classList.add('finished');
	});

	new Vivus('bottomline', {
		type: 'delayed',
		duration: 200,
		pathTimingFunction: Vivus.LINEAR
	},
		function doDone(obj) {
			obj.el.classList.add('finished');
	});

	var gerobakLoad = document.querySelectorAll('[gerobak-load]');
	$(gerobakLoad).remove();


});
// end ready

/*-----  End of DOCUMENT READY FIRE FUNCTIONS  ------*/