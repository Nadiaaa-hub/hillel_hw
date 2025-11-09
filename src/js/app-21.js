// "use strict";

import "./style.scss";

var alertToggleBtn = document.getElementById("alertToggleBtn");
var toggleAlert = document.getElementById("toggleAlert");
document.addEventListener("DOMContentLoaded", function () {
  var modalButton = document.getElementById("modalButton");
  new bootstrap.Tooltip(modalButton);
});
var isAlertVisible = false;
alertToggleBtn.addEventListener("click", function () {
  if (isAlertVisible) {
    toggleAlert.classList.add("hidden");
    isAlertVisible = false;
  } else {
    toggleAlert.classList.remove("hidden");
    isAlertVisible = true;
  }
});
moment.locale("uk");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
var dateOfBirth = moment("01/01/1990", "DD/MM/YYYY");
var formattedMyDate = dateOfBirth.format("dddd, DD MMMM YYYY ");
var userDateInput = document.getElementById("userDateInput");
var convertDateButton = document.getElementById("convertDateButton");
var errorAlert = document.getElementById("errorAlert");
var convertedDateOutput = document.getElementById("convertedDateOutput");
var regex = /^\d{2}\/\d{2}\/\d{4}$/;
var inputFormat = "DD/MM/YYYY";
var outputFormat = "YYYY-MM-DD";
convertDateButton.addEventListener("click", function () {
  var userInput = userDateInput.value.trim();
  errorAlert.classList.add("hidden");
  convertedDateOutput.classList.add("hidden");
  if (!regex.test(userInput)) {
    errorAlert.classList.remove("hidden");
    return;
  }
  var dateMoment = moment(userInput, inputFormat, true);
  if (dateMoment.isValid()) {
    var convertedDate = dateMoment.format(outputFormat);
    convertedDateOutput.textContent = "Converted data: ".concat(convertedDate);
    convertedDateOutput.classList.remove("hidden");
  } else {
    errorAlert.innerHTML = "Validation error!<strong>".concat(
      userInput,
      "</strong> "
    );
    errorAlert.classList.remove("hidden");
  }
});
