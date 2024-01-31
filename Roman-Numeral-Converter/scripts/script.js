document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const inputNumber = document.getElementById("number");
  const convertBtn = document.getElementById("convert-btn");
  const outputDiv = document.getElementById("output");

  convertBtn.addEventListener("click", convertNumber);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    convertNumber();
  });

  function convertNumber() {
    const inputValue = inputNumber.value.trim();

    if (inputValue === "") {
      alert("Please enter a number.");
      return;
    }

    const decimalNumber = parseInt(inputValue, 10);

    if (isNaN(decimalNumber) || decimalNumber <= 0 || decimalNumber > 3999) {
      alert("Please enter a valid positive number between 1 and 3999.");
      return;
    }

    const romanNumeral = convertToRoman(decimalNumber);
    displayResult(romanNumeral);
  }

  function convertToRoman(decimalNumber) {
    const romanNumerals = [
      "I",
      "IV",
      "V",
      "IX",
      "X",
      "XL",
      "L",
      "XC",
      "C",
      "CD",
      "D",
      "CM",
      "M",
    ];

    const decimalValues = [
      1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
    ];

    let result = "";

    for (let i = decimalValues.length - 1; i >= 0; i--) {
      while (decimalNumber >= decimalValues[i]) {
        result += romanNumerals[i];
        decimalNumber -= decimalValues[i];
      }
    }

    return result;
  }

  function displayResult(result) {
    outputDiv.innerHTML = `<p>Result: ${result}</p>`;
    outputDiv.classList.remove("hidden");
  }
});
