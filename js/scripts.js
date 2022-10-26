// business logic
function displayAll(countTo, countBy) {
  let numArray =[];
  let indexLength = parseInt(countTo);
  let indexStep = parseInt(countBy);
  // console.log('indexLength', indexLength);
  // console.log('indexstep', indexStep);
  for (let i = 0; i <= indexLength; i += indexStep) {
    numArray.push(i);
    // console.log('end of for loop index value:', i);
    // console.log('numArray count', numArray);
  }
  return numArray;
  
}

//ui logic
//maybe need to declare countTo and countBy globally? check hoisting

function handleFormSubmission() {
let countTo = document.getElementById("count-to").value;
let countBy = document.getElementById('steps').value;
event.preventDefault();
let numArray = displayAll(countTo, countBy);

}

function dummy() {
  
}

window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});