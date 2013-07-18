if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var dfd = new jQuery.Deferred();

		dfd.resolve(value);

		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
		var result = [];
		var temp = [];
		var dfd = new jQuery.Deferred();

		
		$.getJSON(url, function(data) {
			for(var i = 0; i < data.people.length; i++) {
				temp.push(data.people[i].name);
			}
		}).done(function() {
			result = temp.sort();
			dfd.resolve(result);
		});
		
		return dfd.promise();
    }
  };
});
