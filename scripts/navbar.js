
// Liste med alle sidene som skal linkes til i navigasjonsmenyen
var pages = [
    "index",
    "dogs",
    "about_adoption",
    "about_relocation",
    "volunteer",
    "pledge",
    "about",
    "contact",

];

// Liste av navnene på alle sidene som skal vises i menyen
var names = [
    "DogDora",
    "Hunder",
    "Om adopsjon",
    "Omplasser hund",
    "Bli frivillig",
    "Støtt oss",
    "Om oss",
    "Kontakt oss"
];


/* Funksjon som lager navigasjonsmenyen. Legger til listen av sidene og en toggle-knapp 
for dropdownmeyen til navbar elementet */

function makeNavbar() {
    var counter = 1;
    var menu = document.createElement("ul");
    menu.setAttribute("id", "navmenu");
    menu.setAttribute("class", "navmenu");
    for (var i = 0; i < 8; i++) {
        var node = document.createElement("li");
        node.setAttribute("class", "navelement");

        var navlink = document.createElement('a');
        navlink.href = pages[i] + ".html";
        node.appendChild(navlink);

        if (counter == 1) {
            node.setAttribute("id", "logo");
        }

        menu.appendChild(node);
        var text = names[i];
        navlink.appendChild(document.createTextNode(text));

        document.getElementById("navbar").appendChild(menu);
        counter += 1;
    }

    var toggle = document.createElement("button");
    toggle.setAttribute("id", "toggleId");
    toggle.setAttribute("onclick", "showDropdown()");

    document.getElementById("navbar").appendChild(toggle);
    makeDropDownMenu();
}



/* Funksjon somo lager dropdoownmenyen, ved å lage en div og legge til alle elementene i den */
function makeDropDownMenu() {
    var div = document.createElement("div");
    div.setAttribute("id", "dropdownmenu");
    div.setAttribute("class", "dropdownmenu");
    div.style.display = "none";

    for (var i = 1; i < 8; i++) {
        var menu = document.createElement("ul");
        var node = document.createElement("li");
        var navlink = document.createElement('a');
        navlink.href = pages[i] + ".html";
        node.appendChild(navlink);
        menu.appendChild(node);
        var text = names[i];
        navlink.appendChild(document.createTextNode(text));

        div.appendChild(node);
        document.getElementById("navbar").appendChild(div);
    }
}

/* Dropdownmenyen blir synlig når man trykker på toggle knappen */
function showDropdown() {
    var menu = document.getElementById("dropdownmenu");
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    }
    else if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
}

// Når siden lastes blir navigasjonsbaren lagt til
window.onload = makeNavbar();




/* Funksjon som highlighter den siden man er på i menybaren 
/* Inspirert av dette eksempelet på StackOverflow:
     https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar
*/
var url = location.href.split("/");
var navLinks = document.getElementsByTagName("nav")[0].getElementsByClassName("navelement");
var currentPage = url[url.length - 1];

for (var i = 0; i < navLinks.length; i++) {
    var lb = navLinks[i].firstChild.href.split("/");
    if(lb[lb.length-1] == currentPage) {
        navLinks[i].className = "current";
    }
}




