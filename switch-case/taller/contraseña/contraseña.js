let contraseña = prompt("Ingrese contraseña");

if (contraseña.length <= 15 && contraseña.length >= 8 && contraseña.includes(" ")){
    console.log("la contraseña es valida");
}else{
    console.log("no es valida");
}

