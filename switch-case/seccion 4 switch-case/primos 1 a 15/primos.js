let numero = parseInt(prompt("ingrse un numero del 1 al 15"));
let primo = numero ==  2 || 3 || 5 || 7 || 11 || 13
switch (primo) {
    case true:
        console.log("es primo");
        
        break;

    default:
        console.log("no es primo");
        break;
}