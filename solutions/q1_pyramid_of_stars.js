/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
    
    let text = '';
    for(let i=0 ; i<rows ; i++) {
       
        for (let k=1; k<=(rows-(i+1)); k++) {
            text += ' ';
        }

        for (let j=0;j<=i;j++) {
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
