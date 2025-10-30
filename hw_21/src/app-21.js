const alertToggleBtn = document.getElementById("alertToggleBtn");
const toggleAlert = document.getElementById("toggleAlert");

document.addEventListener("DOMContentLoaded", function () {
  const modalButton = document.getElementById("modalButton");
  new bootstrap.Tooltip(modalButton);
});

let isAlertVisible = false;

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

const dateOfBirth = moment("01/01/1990", "DD/MM/YYYY");
const formattedMyDate = dateOfBirth.format("dddd, DD MMMM YYYY ");

const userDateInput = document.getElementById("userDateInput");
const convertDateButton = document.getElementById("convertDateButton");
const errorAlert = document.getElementById("errorAlert");
const convertedDateOutput = document.getElementById("convertedDateOutput");

const regex = /^\d{2}\/\d{2}\/\d{4}$/;
const inputFormat = "DD/MM/YYYY";
const outputFormat = "YYYY-MM-DD";

convertDateButton.addEventListener("click", function () {
  const userInput = userDateInput.value.trim();

  errorAlert.classList.add("hidden");
  convertedDateOutput.classList.add("hidden");

  if (!regex.test(userInput)) {
    errorAlert.classList.remove("hidden");
    return;
  }

  const dateMoment = moment(userInput, inputFormat, true);

  if (dateMoment.isValid()) {
    const convertedDate = dateMoment.format(outputFormat);
    convertedDateOutput.textContent = `Converted data: ${convertedDate}`;
    convertedDateOutput.classList.remove("hidden");
  } else {
    errorAlert.innerHTML = `Validation error!<strong>${userInput}</strong> `;
    errorAlert.classList.remove("hidden");
  }
});
