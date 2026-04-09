document.getElementById("checkBtn").addEventListener("click", checkNumber);

function checkNumber() {
  let num = document.getElementById("numberInput").value;
  num = parseInt(num);

  let result = "";

  if (isNaN(num)) {
    result = "Please enter a valid number";
  } else {
    if (num % 2 === 0) {
      result = num + " is Even<br>";
    } else {
      result = num + " is Odd<br>";
    }

    result += "Numbers from 1 to " + num + ": <br>";
    for (let i = 1; i <= num; i++) {
      result += i + " ";
    }
  }

  document.getElementById("output").innerHTML = result;
}