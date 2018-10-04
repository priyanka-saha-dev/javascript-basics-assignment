/* Write a Program to Flatten a given n-dimensional array */

const flatten = (testObj) => {


	if (Array.isArray(testObj)) {
		return flattenDeep(testObj);
	} else {
		return null;
	}
};


function flattenDeep(arr1) {
	return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
