// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
function calculateResult() {
  let e2 = document.getElementsByClassName('studentCard');
  let count = 0;
  if (e2) {
    count = e2.length;
  }
  for (let i = 0; i < count; i += 1) {
    let studentEle = e2[i];
    let marks = [];
    if (studentEle) {
      let sub1Marks = parseFloat(studentEle.querySelector('#sub1-marks').innerHTML);
      let sub2Marks = parseFloat(studentEle.querySelector('#sub2-marks').innerHTML);
      let sub3Marks = parseFloat(studentEle.querySelector('#sub3-marks').innerHTML);
      
      if(!isNaN(sub1Marks)) {
        marks.push(sub1Marks);
      }
      if(!isNaN(sub2Marks)) {
        marks.push(sub2Marks);
      }
      if(!isNaN(sub3Marks)) {
        marks.push(sub3Marks);
      }
    }
    let total = marks.reduce(getSum);
    let percentage = total/marks.length;
    studentEle.querySelector('#total').innerHTML = total;
    studentEle.querySelector('#percentge').innerHTML = percentage;
  }
}
function getSum(total, num) {
  return total + num;
}
