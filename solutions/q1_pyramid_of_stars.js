/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
    
    var text = '';
    for(var i=0 ; i<rows ; i++) {
        //console.log('i = ' + i);
        for (var k=1; k<=(rows-(i+1)); k++) {
            //console.log('       k = ' + k);
            text += ' ';
        }

        for (var j=0;j<=i;j++) {
            //console.log('       j = ' + j);
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
