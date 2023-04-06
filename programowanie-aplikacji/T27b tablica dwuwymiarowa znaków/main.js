
function losujZnak() {
    const znaki = ['a', 'b', 'c', 'd', 'e'];
    return znaki[Math.floor(Math.random() * znaki.length)];
}

const tab = [];
for (let i = 0; i < 7; i++) {
    const wiersz = [];
    for (let j = 0; j < 7; j++) {
        wiersz.push(losujZnak());
    }
    tab.push(wiersz);
}

const tabela = document.getElementById('tablica');
for (let i = 0; i < 7; i++) {
    const wiersz = tabela.insertRow(i);
    for (let j = 0; j < 7; j++) {
        const komorka = wiersz.insertCell(j);
        komorka.textContent = tab[i][j];
    }
}

let liczbaA = 0;
const liczbyB = new Array(7).fill(0);

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        if (tab[i][j] === 'a') {
            liczbaA++;
        }
        if (tab[i][j] === 'b') {
            liczbyB[i]++;
        }
    }
}

document.getElementById('liczba-a').textContent = liczbaA;

let maxB = 0;
let wierszeB = '';
for (let i = 0; i < 7; i++) {
    if (liczbyB[i] > maxB) {
        maxB = liczbyB[i];
        wierszeB = `${i + 1}`;
    } else if (liczbyB[i] === maxB) {
        wierszeB += `, ${i + 1}`;
    }
}
document.getElementById('wiersze-b').textContent = wierszeB;