/* Write a Program to Flatten a given n-dimensional array */

const flatten = (testObj) => {

	// var res = [];

	// if(Array.isArray(testObj)) {
	// 	flatArray(testObj, res);
	// } else {
	// 	res = null;
	// }

	// return res;

	if (Array.isArray(testObj)) {
		return flattenDeep(testObj);
	} else {
		return null;
	}
};

// function flatArray(arrayObj, res) {

// 	for (var i = 0; i <= arrayObj.length; i++) {
// 		if (Array.isArray(arrayObj[i])) {
// 			flatArray(arrayObj[i], res);
// 		} else if (arrayObj[i] != undefined) {
// 			res[res.length] = arrayObj[i];
// 		}
// 	}
// }

function flattenDeep(arr1) {
	return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
