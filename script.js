document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const resultDiv = document.getElementById("result");

  checkBtn.addEventListener("click", function () {
    const userInput = document.getElementById("text-input").value;
    const isPalindrome = checkPalindrome(userInput);
    displayResult(isPalindrome);
  });

  function checkPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }

  function displayResult(isPalindrome) {
    resultDiv.innerHTML = isPalindrome
      ? '<span style="color: #4caf50;">Yes, it is a palindrome!</span>'
      : '<span style="color: #e53935;">No, it is not a palindrome.</span>';
  }
});
