function wykonajTablice() {
    // Tworzenie tablicy
    let tablica = [];
    for (let i = 0; i < 4; i++) {
        let wiersz = [];
        for (let j = 0; j < 4; j++) {
            wiersz.push(Math.round(Math.random()));
        }
        tablica.push(wiersz);
    }

    // zwykla tablica
    document.write("Tablica:<br>");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            document.write(tablica[i][j] + " ");
        }
        document.write("<br>");
    }

    // wysz wiersz
    let suma_max = 0;
    let wiersze_max = [];
    for (let i = 0; i < 4; i++) {
        let suma = 0;
        for (let j = 0; j < 4; j++) {
            suma += tablica[i][j];
        }
        if (suma > suma_max) {
            suma_max = suma;
            wiersze_max = [i];
        } else if (suma == suma_max) {
            wiersze_max.push(i);
        }
    }

    // wiersze z największą suma
    document.write("<br>Wiersze z największą sumą:<br>");
    for (let i = 0; i < wiersze_max.length; i++) {
        let wiersz = tablica[wiersze_max[i]];
        for (let j = 0; j < 4; j++) {
            document.write(wiersz[j] + " ");
        }
        document.write("<br>");
    }

    // petla do odwrocenia
    let tablica_odwrocona = [];
    for (let i = 0; i < 4; i++) {
        let wiersz = [];
        for (let j = 0; j < 4; j++) {
            wiersz.push(tablica[3-j][i]);
        }
        tablica_odwrocona.push(wiersz);
    }

    // tablica odwrocona
    document.write("<br>Odwrócona tablica:<br>");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            document.write(tablica_odwrocona[i][j] + " ");
        }
        document.write("<br>");
    }
}
//wywolujemy funkcje :)
wykonajTablice();
