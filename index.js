document.getElementById("check-btn").addEventListener("click", function () {
  var inputText = document.getElementById("text-input").value.toLowerCase();
  var resultDiv = document.getElementById("result");

  if (inputText === "") {
    alert("Please input a value");
  } else {
    var reversedText = inputText.split("").reverse().join("");
    if (inputText === reversedText) {
      resultDiv.textContent = inputText + " is a palindrome.";
    } else {
      resultDiv.textContent = inputText + " is not a palindrome.";
    }
  }
});
