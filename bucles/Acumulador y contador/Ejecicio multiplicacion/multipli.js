let contador = 1;
let acumuladora = 0;
let numero1 = parseInt(prompt("ingrese numero"));
let numero2 = parseInt(prompt("ingrese numero"));
while (contador <= numero1) {
  acumuladora = acumuladora + numero2;
  contador++
}
console.log("resultado de la multiplicacion :", acumuladora);

