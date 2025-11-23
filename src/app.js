import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function suma(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > 0) {
        total += numeros[i];
      }
    }
    return total;
  }
  
  const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
  console.log(suma(numbers));

  function isOldEnoughToDrive(age) {
  if (age >= 16) return "Yes"
  return "No";
}
console.log(isOldEnoughToDrive(18)); // Output: "Yes"

/* function numberIsDivisible(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 3 === 0) {
        return "Divisible by 2 and 3";
      } else {
        return "Divisible by 2";
      }
    } else {
      if (num % 3 === 0) {
        return "Divisible by 3";
      } else {
        return "Not divisible by 2 or 3";
      }
    }
  } else {
    return "Number is not positive";
  } */


  function numberIsDivisible(num) {
  if (num <= 0) {
    return "Number is not positive";
  }
  if (num % 2 === 0 && num % 3 === 0) {
    return "Divisible by 2 and 3";
  }
  if (num % 2 === 0) {
    return "Divisible by 2";
  }
  if (num % 3 === 0) {
    return "Divisible by 3";
  }
  return "Not divisible by 2 or 3";
}
