let num = parseInt(prompt("ingrse hasta donde quiere que llegue la piramide"))
let i;
let a;


for (i = 1; i <= num; i++) {
    let aste = "";

    for (a = 1; a <= i; a++) {
        aste += "*";
        
     
    }
    
 console.log(aste);

    
}

for (i = num; i > 1; i-- ){
    let aste = ""
 

    for (a = i; a > 1; a--) {
        aste += "*"
        
    }





 console.log(aste);

}

