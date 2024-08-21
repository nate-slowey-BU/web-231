/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nate Slowey
      Date: 8/20

      Filename: project02-02.js
 */
 
// function to verify form 
function verifyForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    (name && phone && email) ? window.alert("Thank you!"): window.alert("Please fill in all fields"); 
}

//event listener for submit button
document.getElementById("submit").addEventListener("click", verifyForm)