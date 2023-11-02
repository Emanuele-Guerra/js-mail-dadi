const utentiAutorizzati = ["emaguerra@gmail.com", "destroy-god@heaven.com", "javascript@script.com", "boolean@boolean.com"];


const emailUtente = prompt("Inserisci la tua email:");

let autorizzato = false;

for (var i = 0; i < utentiAutorizzati.length; i++) {
  if (utentiAutorizzati[i] === emailUtente) {
    autorizzato = true;
    break;
  }
}


if (autorizzato) {
  alert("Accesso autorizzato. Benvenuto: " + emailUtente);
} else {
  alert("Accesso negato. La tua email non è autorizzata.");
}


