document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");

  const isValidUSPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[2-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const displayResults = (message, isSuccess) => {
    const resultElement = document.createElement("div");
    resultElement.textContent = message;

    if (isSuccess) {
      resultElement.classList.add("success");
      resultElement.style.color = "rgb(0, 71, 27)";
    } else {
      resultElement.classList.add("error");
      resultElement.style.color = "rgb(77, 56, 0)";
    }

    resultsDiv.appendChild(resultElement);
  };

  const clearResults = () => {
    userInput.value = "";
  };

  const handleCheckButtonClick = () => {
    const phoneNumbers = userInput.value.trim().split(/\s+/);

    if (phoneNumbers.length === 0) {
      displayResults("Please enter phone number(s).", false);
    } else {
      phoneNumbers.forEach((phoneNumber) => {
        if (isValidUSPhoneNumber(phoneNumber)) {
          displayResults(`${phoneNumber}: Valid US phone number!`, true);
        } else {
          displayResults(
            `${phoneNumber}: Invalid US phone number. Please check and try again.`,
            false
          );
        }
      });
    }
  };

  const handleClearButtonClick = () => {
    clearResults();
    resultsDiv.innerHTML = "";
  };

  checkBtn.addEventListener("click", handleCheckButtonClick);
  clearBtn.addEventListener("click", handleClearButtonClick);

  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleCheckButtonClick();
    }
  });
});
