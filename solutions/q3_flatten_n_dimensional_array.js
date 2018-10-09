/* Write a Program to Flatten a given n-dimensional array */
function flattenDeep(arr1) {
	return arr1.reduce((acc, val) =>
		Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []
	);
}
const flatten = (testObj) => {
	let finalOutput = null;
	if (Array.isArray(testObj)) {
		finalOutput = flattenDeep(testObj);
	}
	return finalOutput;
};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
