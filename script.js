var wrapper = document.querySelector(".wrapper");
var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");

function multiplyNumbers() {
  var number1 = Number(
    prompt("What is the estimated number of miles per year that you drive?")
  );
  var number2 = Number(
    prompt("What is the current cost of a gallon of gasoline in your area?")
  );

  resultEle.innerHTML = multiply(number1, number2);

  function multiply(nm1, nm2) {
    return (
      "To drive a car with a MPG rating of " +
      "12" +
      " for " +
      nm1 +
      " miles at $" +
      nm2 +
      " it would cost $" +
      (nm1 * nm2) / "12" +
      "." +
      "<br>" +
      " To drive a car with a MPG rating of " +
      "17" +
      " for " +
      nm1 +
      " miles at $" +
      nm2 +
      " it would cost $" +
      (nm1 * nm2) / "17" +
      "." +
      "<br>" +
      " To drive a car with a MPG rating of " +
      "26" +
      " for " +
      nm1 +
      " miles at $" +
      nm2 +
      " it would cost $" +
      (nm1 * nm2) / "26" +
      "." +
      "<br>" +
      " To drive a car with a MPG rating of " +
      "29" +
      " for " +
      nm1 +
      " miles at $" +
      nm2 +
      " it would cost $" +
      (nm1 * nm2) / "29" +
      "."
    );
  }
}

multiplyNumbers();

submitEle.addEventListener("click", function () {
  multiplyNumbers();
});