let sokeFelt = document.getElementById('sokeFelt')
let h = document.createElement("h3");
h.setAttribute("id", "melding");
document.getElementById("overskrift").appendChild(h);


//Egenskaper til filteret
var pels_filters = [
    { egenskap: "kort pels", checkbox: document.getElementById('pels.kort') },
    { egenskap: "middels pels", checkbox: document.getElementById('pels.middels') },
    { egenskap: "lang pels", checkbox: document.getElementById('pels.lang') },
]

var snitt_filters = [
    { egenskap: "turglad", checkbox: document.getElementById('turglad') },
    { egenskap: "lydig", checkbox: document.getElementById('lydig') },
    { egenskap: "familievennlig", checkbox: document.getElementById('familievennlig') },
]

//Liste over hundene
var hunder = [
    {
        id: 0,
        bilde: ["./images/Alvin1.jpg", "./images/Alvin2.jpg", "./images/Alvin3.jpeg"],
        navn: "Alvin",
        beskrivelse: "Leken eldre herremann med en nydelig myk hvit pels. Blir du hans nye eier?",
        egenskaper: ["turglad", "lydig", "middels pels"],
        tekst: "Han er en søt liten dvergpuddel født 2010. <br> <br> Alvin er en eldre herremann, men vi tror ikke noen har fortalt han hvor gammel han er for han løper rundt som en valp! Han er en liten gladgutt som elsker kos og nærhet med sine mennesker. <br><br>Han vil trenge et hjem med hundevante mennesker som klarer å lese signaler Alvin gir når han er usikker. Han kan reagere litt usikkert i noen håndterings situasjoner. Vi kan gi råd om dette til aktuelt hjem. <br><br>Han er glad i andre hunder og vil helst hilse på alle, han kan nok dele hjemmet med en rolig liten hund, om kjemien stemmer. Vi ser etter et hjem uten små barn. "
    },
    {
        id: 1,
        bilde: ["./images/Georg3.jpg", "./images/Georg2.jpeg", "./images/Georg1.jpg"],
        navn: "Georg",
        beskrivelse: "Badeglad kompis som elsker å tilbringe tid ute. Han er stor, rund og har nydelig svart pels.",
        egenskaper: ["lang pels", "lydig", "familievennlig"],
        tekst: "Georg er en sensitiv New Foundlandshund født i 2016. <br> <br> Han er kastrert. For å bli vurdert som nytt hjem til Georg må du kunne tilby et landlig beliggende hus, hage og en hundegård hvor han kan få lov å være i fred hvis han ønsker det. Han elsker å være ute. Du bør kun ha et lite nettverk, da Georg trenger tid for å godta nye mennesker. Du må belage deg på hyppige besøk over noen uker for å bli kjent før en evt prøveadopsjon. Vi søker etter erfarne eier/e uten barn og andre dyr, hvor du kan vise til at du har erfaring med problematferd og at du kun bruker positive og belønningsbaserte metoder. <br> <br> Georg er en spesiell hund som har med seg en del dårlige erfaringer og dette bærer han preg av. Han er en usikker gutt som trenger tid til å bli trygg på mennesker i hans tempo. Han er leken og godbitmotivert og elsker å bade! Når han først får tillit til noen så er han også veldig kosete og kontaktsøkende, og en skikkelig venn for livet."
    },
    {
        id: 2,
        bilde: ["./images/Ida2.jpg", "./images/Ida1.jpg", "./images/Ida3.jpg"],
        navn: "Ida",
        beskrivelse: "Energisk liten Corgi som trenger tid på å bli å bli kjent med sine nye mennesker. Derfor har vi det",
        egenskaper: ["turglad", "familievennlig", "lydig", "kort pels"],
        tekst: "Hun er en corgi født ca i 2018. <br> <br> Ida er en sensitiv jente som har hatt en ganske tøff start. Dette har gjort at hun er skeptisk til nye ting og mennesker, og trenger litt tid til å bli trygg. Når hun blir kjent er hun en fantastisk hund som elsker kos og nærhet. <br><br> Hun trenger mennesker som forstår nervøse hunder og har mye tålmodighet. Ida kan gå fra kjemperedd til lykkelig på et blunk om hun forstår at ting ikke er farlig. Hun elsker turer i rolige omgivelser og turer i blomsterhagen er favoritten! <br><br>Ida kan ikke være alene hjemme og vi ser kun etter hjem hvor noen er hjemmeværende eller jobber hjemmefra. <br><br>Hun bor for tiden i et fosterhjem som har jobbet mye med henne og hun har gjort store fremskritt. Hun kan bo med både barn og andre hunder om kjemien stemmer. Katt er heller ikke noe problem."
    },
    {
        id: 3,
        bilde: ["./images/Eirik1.jpg", "./images/Eirik2.jpg", "./images/Eirik.jpg"],
        navn: "Eirik",
        beskrivelse: "Leken og sterk Bokser-gutt. Løper like gjerne rundt på engen som å ligge ved sofaen.",
        egenskaper: ["kort pels", "familievennlig", "lydig", "turglad"],
        tekst: "Eirik er en bokser født juni 19. Han er en skikkelig god kar – bedagelig type som tar livet med ro. Eirik hilser høflig og hyggelig på oss tobeinte. Han er oppvokst i et hjem med barn. <br> <br> Han er nyinnflyttet og vi har foreløpig ikke testet han med andre hunder, men han viser ingen negativ reaksjon på de han møter på tur. <br> <br> Eirik er en stor kar på 45 kg. Han har dessverre allergi, som er under utredning og nytt hjem må regne med å legge inn litt innsats og penger for å holde allergien i sjakk. <br> <br> Han er komfortabel med håndtering og en engel hos veterinær."
    },
    {
        id: 4,
        bilde: ["./images/Aleksa2.jpg", "./images/Aleksa1.jpg", "./images/Aleksa3.jpg"],
        navn: "Aleksa",
        beskrivelse: "Smart Cocker Spaniel med nydelige krøllete ører og silkemyk pels.",
        egenskaper: ["middels pels", "turglad", "lydig"],
        tekst: "Aleksandra - eller Aleksa som hun blir kalt av sine venner, er en cocker spaniel. <br> Født i 2016. <br> <br> Hun er en morsom jente som som kan virke litt forsiktig i starten, men som fort blir glad i folk som gir han litt tid. Hun vil passe best inn i hjem uten barn, eller hvor barna er tenåringer.<br> <br> Aleksa er en brukshund og har derfor mye arbeidslyst. Hun liker å bruke hodet sitt så nye eiere må tilrettelegge for dette for å unngå kjedsomhet. Aleksa har også et ganske sterkt gjeterinstinkt, spesielt når det gjelder mennesker og andre hunder. Dette kan skape en del stress. Hun kan derfor ikke bo i byen, men heller i rolige omgivelser. Vi kan gi mer råd om dette til aktuelt hjem.<br> <br> Aleksa har en ganske lav terskel for stress og trenger noen som kan lese hundens signaler og se når det er på tide å roe han ned eller ta han ut av ulike situasjoner. Hun er ingen førstegangs hund. Hun har begynt å vise noe utfordrende atferd når hun kommer opp i stress. Vi kan gi mer informasjon om dette til aktuelle hjem.<br> <br> Aleksa kommer over ens med andre hunder om kjemien stemmer, men hun vokter på mat og gjenstander rundt andre hunder og vil derfor være eneste firbente i hjemmet sitt.<br> <br> Hun vil bli en fantastisk partner i det rette hjemmet."
    },
    {
        id: 5,
        bilde: ["./images/Gard3.png", "./images/Gard2.jpg", "./images/Gard1.jpg"],
        navn: "Gard",
        beskrivelse: "Aktiv og turglad Malteser. Vakker lang pels, og elsker å ha det i strikk.",
        egenskaper: ["lang pels", "turglad"],
        tekst: "Gard er en glad, oppmerksom og leken hannhund. Han liker å jobbe, både fysisk og mentalt, men tåler også helt rolige dager. Gard er kastrert. <br> <br> Gard er en 4 år gammel Malteser som søker nytt hjem.<br> <br> Gard sin store utfordring er at han er høy i stress og takler nye situasjoner dårlig. Han er en typisk gjeterhund, og veldig vokal. <br> <br> Han slapper godt av hjemme om han har det rolig rundt seg. Gard har veldig mye vokt, og passer på både hus og bil. Gard er en aktiv hund som er med på alt fra joggetur, kickbike, ski, og badetur i varmt vær. <br> <br> Gard kan være alene hjemme en hel arbeidsdag uten problemer. Han bor med to katter og bor fint med disse, men kan jage fremmede katter. <br> <br>Liker å kjøre bil. <br> <br> Han har vokst opp i rolige og landlige omgivelser og vil nok ikke tåle bymiljø noe særlig godt, på grunn av alle storessmomentene. <br> <br> Han er generelt skeptisk til fremmede hunder, og reagerer aggressivt i bånd (utagerer). <br> <br> Han kan imidlertid fint bli kjent med hunder hvis hann får litt tid og da går det stort sett veldig bra. Han er ikke veldig dominant, men kan «ta igjen» hvis han blir utfordret. <br> <br> Gard har ved to anledninger nappet/bitt fremmede menn som kom overraskende på ham, uten at det resulterte i noe mer enn skrammer. <br> <br> Det er veldig viktig at et nytt hjem er klar over Gard sin utfordringer, og har kompetanse og er villige til å jobbe videre. Det bør helst ikke være små barn, eller mange hunder i hjemmet fra før. Han bør gis veldig tydelige rammer og en forutsigbar, men stimulerende hverdag. <br> <br> Drømmehjemmet til Gard? <br> <br>Par eller enslig med større/voksne barn som bor i landlige omgivelser og som kan gi Gard en forutsigbar, men givende hverdag bestående av fysisk aktivitet og noen arbeidsoppgaver, f. eks søksoppgaver. <br> <br> Gard må skjermes fra en del situasjoner som involverer mye hunder eller fremmede mennesker og trenger en tydelig eier som har klare forventninger til ham. <br> <br> Tidligere veterinærhistorie:<br> <br> Han har fjernet to spyttkjertler i halsen, og skåret opp poten to ganger, (dette er helt i orden nå). Gard er ikke sjekket for AD/HD. Har hatt noe våteksem. Noe tannstein som bør tas på sikt. Ellers frisk og rask."
    },]

form.addEventListener('input', filter)


// Filter
function filter(event) {
    event.preventDefault()

    var resultat = hunder;

    if (pels_filters.some(filter => filter.checkbox.checked)) {
        resultat = resultat
            .filter(dog => dog.egenskaper
                .some(egenskap => pels_filters
                    .some(filter => filter.egenskap == egenskap && filter.checkbox.checked)))
    }

	/* Sjekker hvilke egenskaper som er huket av og oppdaterer resultatlisten
	til å vise kun de hundene som har alle egenskapene som er blitt huket av.
	*/
    if(snitt_filters.some(filter => filter.checkbox.checked)){
        let snitt = snitt_filters.filter(filter => filter.checkbox.checked)
        resultat = resultat.filter(dog => snitt.every(filter => dog.egenskaper.includes(filter.egenskap)))
    }

    //Søkefelt
    if ((sokeFelt.value.length === 0)) {
        displayList(resultat)
    }
	/* Sjekker om inputen i søkefeltet eksisterer i navnet, egenskapene,
	beskrivelsen eller teksten til hver enkelt hund. Kun hunder som har ordet
	man søker etter i navnet, egenskapene, beskrivelsen eller teksten vil
	vises. Søket fungerer også sammen med checkboxene på siden, så hunder som
	ikke oppfyller kravene til checkboxene vil heller ikke vises.
	*/
    else {
        resultat = resultat.filter(x =>
            x.navn.toUpperCase().includes(sokeFelt.value.toUpperCase())
            || x.beskrivelse.toUpperCase().includes(sokeFelt.value.toUpperCase())
            || x.egenskaper.some(y => y.toUpperCase().includes(sokeFelt.value.toUpperCase()))
            || x.tekst.toUpperCase().includes(sokeFelt.value.toUpperCase())
        )
        displayList(resultat)
        visMelding(resultat)
    }
}


displayList(hunder)


// Hvis ingen resultater kommer av søk, sett en informerende tekst
function visMelding(list) {
    if (list.length == 0 && document.getElementById("melding").innerText == "") {
        let text = document.createTextNode("Dessverre har vi ingen hunder som passer med dine kriterier. Prøv gjerne å søke på noe annet!");
        document.getElementById("melding").appendChild(text);

        let br = document.createElement("br");
        let br2 = document.createElement("br");

        document.getElementById("melding").appendChild(br);
        document.getElementById("melding").appendChild(br2);
    }
    else if (list.length != 0) {
        let melding = document.getElementById("melding");
        melding.innerText = "";
    }
}


// Vise hunder i oversikten
function displayList(list) {
    document.getElementById("hunder").innerText = ""

    for (var i in list) {
        var element = document.createElement("div");
        element.classList.add("intro_hund");

        var bild = document.createElement("img");
        bild.src = list[i].bilde[0];
        element.appendChild(bild);


        var hundeNavn = document.createElement("h2");
        hundeNavn.innerHTML = list[i].navn;
        hundeNavn.classList.add("navn_hund");
        element.appendChild(hundeNavn);

        var beskrivelse = document.createElement("p");
        beskrivelse.innerHTML = list[i].beskrivelse;
        beskrivelse.classList.add("introtekst_hund");
        element.appendChild(beskrivelse);

        var knapp = document.createElement("a");
        knapp.id = list[i].id;
        knapp.classList.add("les_mer_knapp");
        knapp.setAttribute("onclick", "modalHund(this.id)");
        knapp.innerHTML = "Les mer";
        element.appendChild(knapp);

        document.getElementById("hunder").appendChild(element)
    }
}
var bakgrunn = document.getElementById("bakgrunn_modal");

//Åpner modalen til en hund og fyller den med informasjonen til hunden
function modalHund(hundID) {
	document.body.style.overflow = "hidden";

    document.getElementById("bilde").src = hunder[hundID].bilde[0];
    document.getElementById("bilde2").src = hunder[hundID].bilde[1];
    document.getElementById("bilde3").src = hunder[hundID].bilde[2];

    document.getElementById("hundeNavn").innerHTML = hunder[hundID].navn;
    document.getElementById("beskrivelse").innerHTML = hunder[hundID].beskrivelse;
    document.getElementById("egenskaper").innerHTML = hunder[hundID].egenskaper;
    document.getElementById("tekst").innerHTML = hunder[hundID].tekst;


    bakgrunn.style.display = "block";
	bakgrunn.scrollTop = 0;
	var hoyde = document.getElementById("modal").clientHeight;
	document.getElementById("lukk-modal").style.height = hoyde + 200 + "px";
}

//Lukker modalen
function off() {
    bakgrunn.style.display = "none";
	document.body.style.overflow = "scroll";
}
