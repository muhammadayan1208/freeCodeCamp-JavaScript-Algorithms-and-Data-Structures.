document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-btn");
  const inputField = document.getElementById("text-input");
  const resultDiv = document.getElementById("result");

  checkButton.addEventListener("click", function () {
    const userInput = inputField.value;
    const isPalindrome = checkPalindrome(userInput);
    displayResult(isPalindrome);
    resultDiv.classList.remove("hidden");
  });

  function checkPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
  }

  function displayResult(isPalindrome) {
    resultDiv.innerHTML = isPalindrome
      ? '<span style="color: #26ff00 ">Yes, it is a palindrome!</span>'
      : '<span style="color: #ff0000 ">No, it is not a palindrome.</span>';
  }
});
