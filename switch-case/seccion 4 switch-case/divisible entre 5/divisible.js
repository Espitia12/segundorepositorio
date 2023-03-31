let num1 = parseInt(prompt("ingrese un numero"));
let resultado = num1 % 2 == 0
switch (resultado) {
    case true:
        console.log("es divisible");
        
        break;

    default:
        console.log("no es divisible");
        break;
}