/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (rows) => {
    let text = '';
    for(let i = 0; i < rows; i += 1) {
        for (let k = 1; k <= rows - (i + 1); k += 1) {
            text += ' ';
        }
        for (let j = 0; j <= i; j += 1) {
            text += ' *';
        }
        text += '  \n';
    }
    return text;
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
