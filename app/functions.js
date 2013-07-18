if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arg) {
            return str + ', ' + arg;
        };
    },

    makeClosures : function(arr, fn) {
        var fnArray = [];

        var temp = function (x) {
            return function() {
                return fn(x);
            };
        };

        for(var i = 0; i < arr.length; i++) {
            fnArray.push(temp(arr[i]));
        }
        return fnArray;
    },

    partial : function(fn, str1, str2) {
        return function(x) {
            return fn(str1,str2,x);
        };
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var func = arguments [0];
        var arrayArgs = [];
        for(var i = 1; i < arguments.length; i++) {
            arrayArgs.push(arguments[i]);
        }
        return func.apply(this,arrayArgs);
    },

    partialUsingArguments : function(fn) {
        var currentArgs = fn.length - arguments.length - 1;
        if (currentArgs === 1) {
            return fn;
        }
        if (currentArgs < fn.length) {
            var args = Array.prototype.slice.call(arguments,1);
            return function() {
                var finalArgs = args.concat(Array.prototype.slice.call(arguments,0));
                return fn.apply(fn,finalArgs);
            };
        }
    },

    curryIt : function(fn) {
        var allArgs = [];

        var returnFunc = function(x) {
            if (allArgs.length < fn.length) {
                allArgs.push(x);
            }
            if (allArgs.length === fn.length) {
                return fn.apply(fn,allArgs);
            }
            return returnFunc;
        };
        return returnFunc;

    }
  };
});
