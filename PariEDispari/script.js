// PRIMA SOLUZIONE

var parola = "anna"; // da inserire con un prompt

//confronto se le due parole, l'originale e quella girata, sono palindrome

// faccio il confronto direttamente con la funzione perchè mi ritorna una stringa

if(parola === parolaReverse(parola)){
  console.log("è palindroma")
}else{
  console.log("non è palindroma")
}

// creo una funzione perchè è uno strumento che posso riutilizzare
// questa funzione prenderà la parola e mi restituirà la parola girata
// questa funzione riceverà una stringa

console.log(parolaReverse(parola));

function parolaReverse(str){
  var reverse = "";  // creo subito la variabile reverse che mi restituirà una stringa

  // codice per girare la stringa e salvarla dentro reverse
  // prendo la mia stringa, vedo quanto è lunga, parto dall'ultimo numero e lo sommo alla stringa reverse vuota iniziale
  // parto dall'ultimo numero della parola inserita e lo vado ad aggiungere alla variabile reverse vuota 12345 ==> 54321
  // devo partire da length - 1 perchè 
  for(var i = str.length - 1; i >= 0; i--){
    reverse += str[i]; // reverse che è vuoto si somma ad ogni elemento i di str per ogni ciclo

  }

  return reverse;
}



// SECONDA SOLUZIONE

var parola = "Anna";

console.log(isPalindroma(parola))

// puoi anche evitare di mettere === true perchè le condizioni dentro agli IF partono da TRUE
if(isPalindroma(parola) === true){
  console.log("la parola è palindroma");
}else{
  console.log("la parola non è palindroma");
}


function isPalindroma(str){
  var reverse ="";
  for(var i = str.length - 1; i >= 0; i--){
    reverse += str[i]; // reverse che è vuoto si somma ad ogni elemento i di str per ogni ciclo
  }

  //verifico l'uguaglianza e restituisco true o false
  // converto le stringhe in lettere maiuscole perchè JAVASCRIPT e' case sensitive
  if(str.toUpperCase() === reverse.toUpperCase()){
    return true;
  }else{
    return false;
  }
}

// i console log fuori hanno senso se ho un return DENTRO la funzione, se non ho il return, il console.log lo faccio dentro alla funzione



// TERZA SOLUZIONE

var parola = "giuseppe";

if(isPalindroma(parola) === true){
  console.log("la parola è palindroma");
}else{
  console.log("la parola non è palindroma");
}

isPalindroma(parola)
function isPalindroma(str){

  // "split" trasformo la stringa in array
  // dentro le parentesi gli passo il criterio di suddivisione degli elementi della stringa
  var reverse = str.split("");
  // "reverse" prende e gira l'array
  reverse.reverse();
  // "join" prende gli elementi dell'array e me li restituisce come stringa
  reverse = reverse.join("");
  
  //oppure
  var reverse = str.split("").reverse().join("").toUpperCase();

  if(str.toUpperCase() ==== reverse){
    return true;
  }else{
    return false;
  }

  console.log(reverse);
}