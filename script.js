/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

let pesoTotale = 0;
let zucchine = [
    {
        varietà: "bianca",
        peso: 10,
        lunghezza: 13
    },
    {
        varietà: "tonda",
        peso: 5,
        lunghezza: 8
    },
    {
        varietà: "tonda",
        peso: 10,
        lunghezza: 11
    },
    {
        varietà: "tonda",
        peso: 7,
        lunghezza: 10
    },
    {
        varietà: "bianca",
        peso: 12,
        lunghezza: 14
    },
    {
        varietà: "gialla",
        peso: 7,
        lunghezza: 11
    },
    {
        varietà: "gialla",
        peso: 6,
        lunghezza: 8
    },
    {
        varietà: "tonda",
        peso: 7,
        lunghezza: 9
    },
    {
        varietà: "bianca",
        peso: 10,
        lunghezza: 12
    },
    {
        varietà: "gialla",
        peso: 10,
        lunghezza: 14
    },
];

// Ciclo le zucchine per trovare il peso totale
for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
}

console.log(pesoTotale);




