
// Esercizio 1

var studente = {
    'nome': "Gianmarco",
    'cognome': 'Cavaliere',
    'eta': '24',
}

for (var key in studente) {
    console.log('La chiave ' + key + ' ha come valore ' + studente[key]);
    $('.es1').append('La chiave ' + key + ' ha come valore ' + studente[key] + '<br>');
}

// Esercizio 2

var studenti = [{
        'nome': "Antoon",
        'cognome': 'Plancton',
        'eta': '23',
    },
    {
        'nome': "Pietro",
        'cognome': 'Bonucci',
        'eta': '24',

    },
    {
        'nome': "Gianmarco",
        'cognome': 'Cavaliere',
        'eta': '24',

    }
]

for (var i = 0; i < studenti.length; i++) {
    for (var key in studenti[i]) {
        console.log('La chiave ' + key + ' ha come valore ' + studenti[i][key]);
        $('.es2').append('La chiave ' + key + ' ha come valore ' + studenti[i][key] + '<br>');
    }
}

// Esercizio 3

var nuovoStudente = {
    "nome": undefined,
    'cognome': undefined,
    'eta': undefined,
};

nuovoStudente.nome = prompt("Inserisci un Nome");
nuovoStudente.cognome = prompt("Inserisci un Cognome");
eta = prompt("Inserisci un eta");
eta = parseInt(eta);

while (isNaN(eta)) {
    eta = prompt('Inserisci un valore valido!');
}

nuovoStudente.eta = eta;

$('.es3').append('Hai aggiunto uno studente con Nome: ' + nuovoStudente.nome + '<br>' + 'Cognome: ' + nuovoStudente.cognome + '<br>' + 'e la sua Eta: ' + nuovoStudente.eta);

studenti.push(nuovoStudente)

