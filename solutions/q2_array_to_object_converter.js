/* Write a Program to convert an array of objects to an object
	based on a given key */
const convert = (inputArr, keyField) => {
	let finalOutput = null;
	if (Array.isArray(inputArr)) {
		finalOutput = inputArr.reduce((acc, item) => {
			acc[item[keyField]] = item;
			return acc;
		}, {});
	}
	return finalOutput;
};
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
