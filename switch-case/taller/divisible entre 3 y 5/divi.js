let n1 = parseFloat(prompt("ingrese primer numero"));
let resultado3 = n1 % 5 == 0 && n1 % 3 == 0


switch (true) {
    case resultado3:
      console.log("es divisible entre 3 y 5");
      break;
    default:
      console.log("no es divisible entre 5 y 3");
      break;
  }