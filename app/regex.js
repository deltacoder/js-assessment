if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var findNum = /\d/;
        return findNum.test(str);
    },

    containsRepeatingLetter : function(str) {
        var findRepeat = /([A-z])\1/;
        return findRepeat.test(str);
    },

    endsWithVowel : function(str) {
        var endVowel = /[AEIOUaeiou]$/;
        return endVowel.test(str);
    },

    captureThreeNumbers : function(str) {
        var firstThree = /\d{3}/;
        var result = firstThree.exec(str);
        if (result !== null)
            return result[0];
        else
            return false;
    },

    matchesPattern : function(str) {
        var pattern = /\b\d{3}-\d{3}-\d{4}$/;
        return pattern.test(str);
    },
    isUSD : function(str) {
        var pattern = /^\$\d{1,3}(,\d{3})*\1*(\.\d\d)?$/
        return pattern.test(str);
    }
  };
});
