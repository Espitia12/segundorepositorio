let angulo1 = parseInt(prompt("ingrse un angulo"));
let angulo2 = parseInt(prompt("ingrse un angulo"));
let angulo3 = parseInt(prompt("ingrse un angulo"));
let resultado = angulo1 + angulo2 + angulo3 == 180

switch (resultado) {
    case true:
        console.log("corresponde a un triangulo");
        break;

    default:
        console.log("no corresponde a un triangulo");
        break;
}

