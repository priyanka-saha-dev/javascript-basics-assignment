// console.log('***************Question 1***************');
// var q1 = require('./solutions/q1_pyramid_of_stars');
// console.log(q1(6));

console.log('***************Question 2***************')
const testObj = [{ id: 1, name: 'Ankit', role: 'Developer'},
{ id: 2, name: 'Pankhuri', role: 'Lead'},
{ id: 3, name: 'Anubha', role: 'QA'}];;
var key = 'role';

var q2 = require('./solutions/q2_array_to_object_converter');
//q2(testObj, key);
console.log(q2(testObj, key));