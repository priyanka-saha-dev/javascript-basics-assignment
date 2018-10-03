/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (inputArr, key) => {
	
	var res = {};

	if(inputArr instanceof Array) {
		inputArr.forEach(element => {
			//console.log(element);
			//console.log("key is : " + element[key]);
			res[element[key]] = element;
		});
	} else {
		res = null;
	}

	return res;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
