var teller = 2; //Bestemmer hvilken slide man er på og hva som da blir neste
var intervall = setInterval(tid, 10000); //Kjører tidsintervallet for slides. 

function slide(x) {
    teller = x; //Henter inn hvilken slide som vises
    clearInterval(intervall);   //Stopper intervallet slik at det ikke blir mer tid enn syv sekunder

    intervall = setInterval(tid, 10000); //Kjører intervallet på nytt
}

function tid() { //Gjør at bildene beveger seg til riktig bilde.
    document.getElementById("radio" + teller).checked = true;
    teller++;

    if (teller > 4) {
        teller = 1;
    }
}