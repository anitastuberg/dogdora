
// Liste av alle sidene som skal linkes til i utforsk-delen
var sideListe = [
    "index",
    "dogs",
    "about_adoption",
    "about_relocation",
    "volunteer",
    "pledge",
    "about",
    "contact",
];

// Navn på alle sidene i utforsk-delen
var navn = [
    "Hjem",
    "Hunder",
    "Om adopsjon",
    "Omplasser hund",
    "Bli frivillig",
    "Om oss",
    "Støtt oss",
    "Kontakt oss"
];

// Addresse
var besøk = [
    "Doravegen 34",
    "7042 Trondheim"
]


// Kontakt
var kontakt = [
    "+47 876 55 439",
    "dogdora@dogdora.no"
]

// Sosiale media
var følg = [
    "Twitter",
    "Facebook",
    "Instagram"
]


/* Funksjon som lager labelen i footeren */ 
function addLabel() {
    var list = document.createElement("ul"); 
    var link = document.createElement("a");
    link.href = "index.html";
    
    list.appendChild(document.createTextNode("DogDora"));

    var txt = "© 2020 DogDora Rescue Group. All rights reserved";

    var node = document.createElement("li");
    var textnode = document.createTextNode(txt);
    node.appendChild(textnode);
    list.appendChild(node);
    document.getElementById("label").appendChild(list);

}

/* Funksjon som lager kontakt-delen i footeren */ 
function addkontakt() {
    var list = document.createElement("ul");
    list.appendChild(document.createTextNode("Kontakt oss"));

    kontakt.forEach(function (item) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(item);
        node.appendChild(textnode);
        list.appendChild(node);
        document.getElementById("kontakt").appendChild(list);
    });
}


/* Funksjon som lager besøk-delen i footeren */ 
function addbesøk() {
    var list = document.createElement("ul");
    list.appendChild(document.createTextNode("Besøk oss"));

    besøk.forEach(function (item) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(item);
        node.appendChild(textnode);
        list.appendChild(node);
        document.getElementById("besøk").appendChild(list);
    });
}

/* Funksjon som lager følg-delen i footeren */ 
function addfølg() {
    var list = document.createElement("ul");
    list.appendChild(document.createTextNode("Følg oss"));

    følg.forEach(function (item) {
        var node = document.createElement("li");
        var navlink = document.createElement('a');
        navlink.href = "https://" + item + ".com";
        node.appendChild(navlink);
        list.appendChild(node);
        var textnode = item;
        navlink.appendChild(document.createTextNode(textnode));
        document.getElementById("følg").appendChild(list);
    });
}

/* Funksjon som lager utforsk-delen i footeren hvor man kan navigere til alle sidene */
function addutforsk() {
    var list = document.createElement("ul");
    list.appendChild(document.createTextNode("Utforsk"));

    for (var i = 0; i < 8; i++) {
        var node = document.createElement("li");
        var navlink = document.createElement('a');
        navlink.href = sideListe[i] + ".html";
        node.appendChild(navlink);
        list.appendChild(node);
        var text = navn[i];
        navlink.appendChild(document.createTextNode(text));
        document.getElementById("utforsk").appendChild(list);
    }

}

/* Funksjon som lager footeren, kaller på funksjonen for hver del */
function makeFooter() {
    let label = document.createElement("div");
    label.setAttribute("id", "label")

    let utforsk = document.createElement("div");
    utforsk.setAttribute("id", "utforsk")

    let v_c = document.createElement("div");
    v_c.setAttribute("id", "v_c")

    let besøk = document.createElement("div");
    besøk.setAttribute("id", "besøk")

    let kontakt = document.createElement("div");
    kontakt.setAttribute("id", "kontakt")

    v_c.appendChild(besøk)
    v_c.appendChild(kontakt)

    let følg = document.createElement("div");
    følg.setAttribute("id", "følg")


// Legger til alle elementene i footeren
    document.getElementById("footer").appendChild(label);
    document.getElementById("footer").appendChild(utforsk);
    document.getElementById("footer").appendChild(v_c);
    document.getElementById("footer").appendChild(følg);

    addLabel();
    addfølg();
    addkontakt();
    addbesøk();
    addutforsk();
}

// Når siden lastes legges footeren til 
window.onload = makeFooter();
