// Jovain Chisholm 000905188 Feb 5, 2023
// Interactive JavaScript Challenge: Put Your Input to the Test
//  SA0001: I Jovain Chisholm, 000905188 certify that this material is my original work. No other person's work has been used without due acknowledgement.I have not made my work available to anyone else.

window.addEventListener("load", function () {
  const nav = document.querySelector("nav");
  nav.classList.add("show");
});

const section = document.querySelector("#section");
const spinner = document.querySelector("#spinner");

setTimeout(function () {
  spinner.style.display = "none";
  section.style.display = "block";
}, 0.5);

// Question 1  - Convert Days to Years, Months, Days
// Converts days to years, months, and days

function convert() {
  let num = parseInt(document.getElementById("q1_input").value);
  let box = document.getElementById("q1_output");
  if (Number.isInteger(num) && num >= 0) {
    let years = Math.floor(num / 365.25);
    let months = Math.floor((num % 365.25) / 30.44);
    let days = Math.floor((num % 365.25) % 30.44);
    box.value = `${years} years, ${months} months, ${days} days`;
  } else {
    box.value = "Non-numeric or negative input";
  }
}

// Question 2 - Perimeter and Area
// Calculates the perimeter and area of a square given the side length

function square() {
  let num = parseInt(document.getElementById("q2_input").value);
  let box = document.getElementById("q2_output");
  if (Number.isInteger(num) && num >= 0) {
    let perimeter = 4 * num;
    let area = num * num;
    box.value = `Perimeter: ${perimeter} Area: ${area}`;
  } else {
    box.value = "Can’t calculate.";
  }
}

// Question 3 - Vowels
// Checks if a letter is a vowel or not

function vowelOrNot() {
  let letter = document.getElementById("q3_input").value;
  let box = document.getElementById("q3_output");
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter.toLowerCase())) {
    box.value = "A Vowel";
  } else if (letter.toLowerCase() === "y") {
    box.value = "Sometimes";
  } else {
    box.value = "Not a vowel";
  }
}

// Question 4 - Factorial
// Calculates the factorial of a number given the number as input

function factorial() {
  let num = parseInt(document.getElementById("q4_input").value);
  let box = document.getElementById("q4_output");
  if (Number.isInteger(num) && num >= 0) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    box.value = result;
  } else {
    box.value = "Cannot compute factorial value";
  }
}

// Question 5 - Binary to Decimal
// Converts a binary number to a decimal number given the binary number as input

function binaryToDecimal() {
  let binary = document.getElementById("q5_input").value;
  let box = document.getElementById("q5_output");
  if (binary.length >= 10 && binary.length <= 20) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        decimal += Math.pow(2, i);
      } else if (binary[i] !== "0") {
        box.value = 0;
      }
    }
    box.value = decimal;
  } else {
    box.value = 0;
  }
}
