if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var files = [];
    	var directories = [];

    	if(dirName === undefined) {
    		goThroughDirectories(data);
    	}
    	else {
    		directories.push(data.files);
    		for(var i = 0; i < directories[0].length; i++) {
    			var temp = directories[0][i];
    			if ((typeof temp != typeof 'String') && temp.dir === dirName) {
    				goThroughDirectories(temp);
    			}
    			else if (typeof temp != typeof 'String') {
    				directories.push(temp);
    			}
    		}
    	}

    	function goThroughDirectories(dir) {
    		var dirContents = [];
    		dirContents.push(dir.files);
    		for(var i = 0; i < dirContents[0].length; i++) {
    			var temp = dirContents[0][i];
    			if(typeof temp == typeof 'String') {
    				files.push(temp);
    			}
    			else {
    				goThroughDirectories(temp);
    			}
    		}
    	}

    	return files;

    },

    permute: function(arr) {
    	var permutations = [];
    	while(arr.length > 0) {
    		var currentNum = arr.shift();
    		permutations = function(x,perms) {
    			if(perms.length === 0) {
    				perms.push(x);
    				return perms;
    			}
    			else if(perms.length === 1) {
    				var currentPermutations = [];
    				var temp;
    				
    				for(var i = 0; i < perms.length+1; i++) {
    					temp = perms.slice(0);
    					temp.splice(i,0,x);
    					currentPermutations.push(temp);
    				}
    				return currentPermutations;
    			}
    			else {
    				var currentPermutations = [];
    				var temp;

    				for(var i = 0; i < perms.length; i++) {
    					for(var j = 0; j < perms[i].length + 1; j++) {
    						temp = perms[i].slice(0);
    						temp.splice(j,0,x);
    						currentPermutations.push(temp);
    					}
    				}
    				return currentPermutations;
    			}
    		}(currentNum,permutations);
    	}

    	return permutations;
    }
  };
});
