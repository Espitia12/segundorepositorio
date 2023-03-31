let año = parseInt(prompt("ingrse año"))
let bisiesto = año % 400 == 0 || año % 4 == 0

switch (bisiesto) {
    case true:
      console.log("es un año bisiesto");
      break;
    default:
      console.log("no es un año bisiesto");
      break;
  }