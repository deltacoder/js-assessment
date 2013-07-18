if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
		var time;
		
		function startCount() {
			console.log(start++);
			if(start <= end) {
				time = setTimeout(startCount, 100);
			}
		};

		startCount();

		return {
			cancel: function() {
				clearTimeout(time);
			}
		};
    }

  };
});