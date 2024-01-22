const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input").value;
const result = document.getElementById("result");

function palindrome(str) {
  const alphanumericArray = str.toLowerCase().match(/[a-z0-9]/g);
  const cleanString = alphanumericArray.join("");
  const reverseString = alphanumericArray.reverse().join("");

  if (cleanString === reverseString) {
    result.innerHTML = `${input} is a palindrome`;
  } else {
    result.innerHTML = `${input} is not a palindrome`;
  }
}

function validInput() {
  if (input === "") {
    alert("Please input a value");
    return;
  } else {
    palindrome(input);
  }
}

checkButton.addEventListener("click", validInput);
