let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let mayor = num1 > num2
let menor = num1 < num2
let igual = num1 == num2

switch (true) {
    case mayor:
      console.log("el primer numero es mayor que el segundo");
      break;
      case menor:
        console.log("el primer numero es menor que el segundo");
        break;
        case igual:
          console.log("el primer numero es igual que el segundo");
          break;
    default:
      console.log("no ingresaste un numero");
      break;
  }
