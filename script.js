// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.getElementById('form')
const userInput = document.getElementById('username')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const terms = document.getElementById('terms')

const errorContainer = document.querySelector('.errors')
const errorList = document.querySelector('.errors-list')

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

form.addEventListener('submit',e=>{

  
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = []
  clearErrors()
  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  if(userInput.value.length <6){
    errorMessages.push('Username length should be greater than 6 chracters')
  }
  //      2. Ensure the password is at least 10 characters long
  if(password.value.length <10){
    errorMessages.push('Password length should be greater than 10 chracters')
  }
  //      3. Ensure the password and confirmation password match
  if(password.value !== passwordConfirmation.value){
    errorMessages.push('Enter same password in confirmation!!')
  }
  //      4. Ensure the terms checkbox is checked
  if(!terms.checked){
    errorMessages.push('Accept the terms and conditions!')
  }
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if(errorMessages.length > 0){
    showErrors(errorMessages)
    e.preventDefault()
  }
  
})
// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while(errorList.children[0]!=null){
    errorList.removeChild(errorList.children[0]);
  }
  errorContainer.classList.remove('show')
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach(element => {
    const li = document.createElement('li')
    li.innerText=element
    errorList.appendChild(li)

  })
  errorContainer.classList.add('show')
}
