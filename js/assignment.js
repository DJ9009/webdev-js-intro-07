"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of the division of two numbers
function returnTheRemainder(a, b) {
    return a % b;
  }
  
  // Function to check if a number is even
  function checkIfEven(num) {
    return num % 2 === 0;
  }
  
  // Function to get the fourth element of the lostNumbers array
  function getTheFourthElement(array) {
    return array[3];
  }
  
  // Event listener to render answers when the button is clicked
  submissionBtn.addEventListener("click", () => {
    // Calculate the remainder of 5 divided by 4
    const remainder = returnTheRemainder(5, 4);
    remainderElement.textContent = `Expected: 1, Actual: ${remainder}`;
  
    // Check if 47 is even
    const isEven = checkIfEven(47);
    checkIfEvenElement.textContent = `Expected: false, Actual: ${isEven}`;
  
    // Get the fourth element of the lostNumbers array
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = `Expected: 16, Actual: ${fourthElement}`;
  });