"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Nate Slowey
      Date:   10/2

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
  if (useShip.checked) {
    // Set first name billing equal to first name shipping
    let firstnameShip = document.getElementById("firstnameShip").value;
    document.getElementById("firstnameBill").value = firstnameShip;

    // Set last name billing equal to last name shipping
    let lastnameShip = document.getElementById("lastnameShip").value;
    document.getElementById("lastnameBill").value = lastnameShip;

    // Set address 1 billing equal to address 1 shipping
    let address1Ship = document.getElementById("address1Ship").value;
    document.getElementById("address1Bill").value = address1Ship;

    // Set address 2 billing equal to address 2 shipping
    let address2Ship = document.getElementById("address2Ship").value;
    document.getElementById("address2Bill").value = address2Ship;

    // Set city billing equal to city shipping
    let cityShip = document.getElementById("cityShip").value;
    document.getElementById("cityBill").value = cityShip;

    // Set billing country equal to billing shipping
    let countryShip = document.getElementById("countryShip").value;
    document.getElementById("countryBill").value = countryShip;

    // set billing postal code equal to shipping postal code
    let codeShip = document.getElementById("codeShip").value;
    document.getElementById("codeBill").value = codeShip;

    // set billing state equal to shipping state
    let stateShip = document.getElementById("stateShip").selectedIndex;
    document.getElementById("stateBill").selectedIndex = stateShip;
  }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
