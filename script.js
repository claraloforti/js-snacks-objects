/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

let pesoTotale = 0;
let zucchine = {
    zucchina1: {
        varietà: "bianca",
        peso: 10,
        lunghezza: 13
    },
    zucchina2: {
        varietà: "tonda",
        peso: 5,
        lunghezza: 8
    },
    zucchina3: {
        varietà: "tonda",
        peso: 10,
        lunghezza: 11
    },
    zucchina4: {
        varietà: "tonda",
        peso: 7,
        lunghezza: 10
    },
    zucchina5: {
        varietà: "bianca",
        peso: 12,
        lunghezza: 14
    },
    zucchina6: {
        varietà: "gialla",
        peso: 7,
        lunghezza: 11
    },
    zucchina7: {
        varietà: "gialla",
        peso: 6,
        lunghezza: 8
    },
    zucchina8: {
        varietà: "tonda",
        peso: 7,
        lunghezza: 9
    },
    zucchina9: {
        varietà: "bianca",
        peso: 10,
        lunghezza: 12
    },
    zucchina10: {
        varietà: "gialla",
        peso: 10,
        lunghezza: 14
    },
};

// Ciclo le zucchine per trovare il peso totale
for (let key in zucchine) {
    pesoTotale += zucchine[key].peso;
}

console.log(pesoTotale);




