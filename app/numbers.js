if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bitLoc = 1 << (bit-1);
        if((num & bitLoc) > 0) {
            return 1;
        }
        else {
            return 0;
        }
    },

    base10: function(str) {
        var num = 0;
        var j = 0;
        for(var i = str.length -1; i >= 0; i--) {
            if(str[j] === '1') {
                num += Math.pow(2, i);
            }  
            j++;
        }
        return num;
    },

    convertToBinary: function(num) {
        var binary = num.toString(2);
        var counter = 8 - binary.length;
        while (counter > 0) {
            binary = '0' + binary;
            counter--;
        }
        return binary;
    },

    multiply: function(a, b) {
        var result = a * b;
        var precisionA = a.toString().split('.');
        var precisionB = b.toString().split('.');
        var precision;
        if(precisionA.length === 1 || precisionB.length === 1)
        {
            if(precisionA.length > 1){
                precision = precisionA[1].length;
            }
            else if(precisionB.length > 1) {
                precision = precisionB[1].length;
            }
            else {
                precision = 0;
            }
        }
        else 
        {
            precision = precisionA[1].length + precisionB[1].length;
        }
        result = result.toPrecision(precision);
        return parseFloat(result);


    }
  };
});

