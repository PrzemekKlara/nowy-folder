// podaj 10 znakow, dlogosc i ilosc slow, wyswietl znaki,generuj slowa
function generuj() {
    let znakiInput = document.getElementById("znakiInput").value;
    let znaki = znakiInput.split("");
    let dlugosc = document.getElementById("dlugoscInput").value;
    let ilosc = document.getElementById("iloscInput").value;

    let tabelaZnaki = document.getElementById("tabelaZnaki");
    let wierszZnaki = tabelaZnaki.insertRow();
    // 10 znakow
    for (let i = 0; i < 10; i++) {
        let komorka = wierszZnaki.insertCell();
        komorka.innerHTML = znaki[i];
    }
    //ilosc slow
    let tabelaSlowa = document.getElementById("tabelaSlowa");
    for (let i = 0; i < ilosc; i++) {
        let slowo = "";
        //dlugosc slow
        for (let j = 0; j < dlugosc; j++) {
            // losowanie
            let index = Math.floor(Math.random() * znaki.length);
            slowo += znaki[index];
        }

        // nowe slowa do tabeli
        let wierszSlowa = tabelaSlowa.insertRow();
        let komorka = wierszSlowa.insertCell();
        komorka.innerHTML = slowo;
    }
}
