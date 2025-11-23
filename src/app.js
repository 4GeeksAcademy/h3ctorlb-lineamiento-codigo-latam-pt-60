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
