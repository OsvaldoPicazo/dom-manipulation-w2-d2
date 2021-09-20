console.log('INDEX.JS connected');

// ****************************** part 1 ******************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();
  
  // 1: get the input from user related to the new task and the owner of the task
  
  // 2: append it to the DOM
  
  // 3: clear the form after the submission
  
  // ... your code here
  
});

// ****************************** part 2 ******************************

// 1: get the DOM element that represents 'Update gif' button
const updateGifButton = document.getElementById("update-button")

// 2: add to click handler to it
//updateGifButton.addEventListener('click', event => {iframe.})

// 3: get the DOM element that represents 'iframe tag'
const gifFrame = document.getElementsByTagName("iframe")
// 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button


// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears