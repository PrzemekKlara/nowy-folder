//losowe liczby, zakres <0,9>, dwuwymiarowa tablica,  porownanie < = >
function losowaLiczba() {

    return Math.floor(Math.random() * 10);
}
let tab = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        tab[i][j] = losowaLiczba();
    }
}

// wyswietlanie tablicy
//insert row - nowy wiersz do tabeli
//insert cell - nowa komorka do wiersza
let tabela = document.getElementById("tablica");
for (let i = 0; i < 3; i++) {
    let wiersz = tabela.insertRow(i);
    for (let j = 0; j < 3; j++) {
        let komorka = wiersz.insertCell(j);
        komorka.textContent = tab[i][j];
    }
}

let suma_LG_PD = tab[0][0] + tab[1][1] + tab[2][2];
let suma_LD_PG = tab[2][0] + tab[1][1] + tab[0][2];

// wyswietl z spana
 document.getElementById("suma-lgpd").textContent = suma_LG_PD ;
 document.getElementById("suma-ldpg").textContent = suma_LD_PG ;

// porownanie
if (suma_LG_PD > suma_LD_PG) {
    document.getElementById("porownanie").textContent = "Suma na przekątnej LG-PD jest większa.";
} else if (suma_LD_PG > suma_LG_PD) {
    document.getElementById("porownanie").textContent = "Suma na przekątnej LD-PG jest większa.";
} else {
    document.getElementById("porownanie").textContent = "Sumy na przekątnych są równe.";
}