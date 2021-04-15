// Prompt utente Pari/Dispari e Scelta numero 1-5

var even_odd = "dispari" //prompt("Pari o dispari?")
var numero = 5 //parseInt(prompt("Scegli un numero da 1 a 5"));
var num_comp = randomGenerator(5);
var somma = numero + num_comp;

/* 
console.log(num_comp);
console.log(somma); */
/* console.log(even_odd);
console.log(numero); */

// funzione di generatore di un numero random 1-5

// visualizzazione del generatore random
/* console.log(randomGenerator()); */

console.log(checkPariDispari(somma))

console.log("Il tuo numero è: " + numero);
console.log("Il numero del computer è: " + num_comp);
console.log("la somma totale è : " + somma);


if(even_odd == checkPariDispari(somma)){
  console.log("Hai vinto")
}else{
  console.log("Hai perso")
}

/* if(even_odd === "pari" && checkPariDispari(somma) === "pari"){
  console.log("Hai vinto");
}else if(even_odd === "dispari" && checkPariDispari(somma) === "dispari"){
  console.log("Hai vinto");
}else{
  console.log("Hai perso")
}
 */

function checkPariDispari(num){
  if(num % 2 === 0){
    return "pari";
  }else{
    return "dispari";
  }
}

function randomGenerator(max){
  var randomNum = Math.ceil(Math.random() * max);
  return randomNum;
  
}

