if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
		var module = {};
		module.name = str2;
		module.greeting = str1;
		module.sayIt = function() {
			return module.greeting + ', ' + module.name;
		};
		return module;
    }
  };
});

