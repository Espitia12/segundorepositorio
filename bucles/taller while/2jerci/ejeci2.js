let contador = 1;
let acumuladora = 0;
let num2 = 1;
let numero1 = parseInt(prompt("ingrese numero"));
while (contador <= numero1) {
  acumuladora = acumuladora + num2;
  contador++
  num2++
}
console.log("resultado de la suma :", acumuladora);

