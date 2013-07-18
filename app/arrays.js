if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        var count = 0;
        while(count < arr.length) {
            sum += arr[count++];
        }
        return sum;
    },

    remove : function(arr, item) {
        var newArray = [];
        var count = 0;
        while (count < arr.length) {
            if(arr[count] !== item) {
                newArray.push(arr[count]);
            }
            count++;
        }
        return newArray;
    },

    removeWithoutCopy : function(arr, item) {
        var count = 0;
        while(count < arr.length) {
            if(arr[count] === item) {
                arr.splice(count--,1);
            }
            count++;
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var index = 0;
        var count = 0;
        while(index < arr.length) {
            if(arr[index] === item) {
                count++;
            }
            index++;
        }

        return count;
    },

    duplicates : function(arr) {
        arr.sort();
        var index = 0;
        var newArray = [];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === arr[i+1]) {
                if(newArray[newArray.length - 1] !== arr[i]) {
                    newArray.push(arr[i]);
                }
            }
        }
        return newArray;
    },

    square : function(arr) {
        for(var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var occuranceArray = [];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                occuranceArray.push(i);
            }
        }
        return occuranceArray;
    }
  };
});
