let edad = parseInt(prompt("ingrese edad"));
let mayor = edad >= 18
switch (edad) {
    case true:
      console.log("es mayor de edad");
      break;
    default:
      console.log("No es mayor de edad");
      break;
  }