var feilmeldinger = {
	fornavnerror: "Det er kun tillatt med store og små bokstaver samt mellomrom.",
	etternavnerror: "Det er kun tillatt med store og små bokstaver samt mellomrom.",
	eposterror: "Eposten må inneholde en @ og et punktum. Eksempel: ola-normann@gmail.com",
	adresseerror: "Adressen må inneholde gatenavn og husnummer. Husbokstav og leilighetsnummer er valgfritt. Eksempel: Øvre Storgate 14B H203",
	postnrerror: "Postnummeret må inneholde 4 siffer",
	poststederror: "Postnummeret du skrev inn er ugyldig. Kun norske pustnummere er godkjent.",
}

//Brukes for å sjekke om hvert felt har blitt validert
var godkjentfelt = {
	fornavnsjekk: false,
	etternavnsjekk: false,
	epostsjekk: false,
	adressesjekk: false,
	postkodesjekk: false,
	poststedsjekk: false,
}

var navn;
var epost;
var address;
var postkode;

function navnValidering(id) {
	/* Regexen tillater kun små og store bokstaver samt mellomrom. Et navn kan
	ikke ende på et mellomrom. */
	var navnRe = /^$|^([æøåÆØÅA-Za-z])+( [æøåÆØÅA-Za-z]+)*$/g;
	navn = document.getElementById(id).value;
	if (navnRe.test(navn) == true) {
		document.getElementById(id + "error").style.display = "none";
		godkjentfelt[id + "sjekk"] = true;
	} else {
		document.getElementById(id + "error").style.display = "inline-block";
		godkjentfelt[id + "sjekk"] = false;
	}
}

function epostValidering() {
	/* Regexen krever minst ett tegn etterfulgt av en @ etterfulgt av minst ett
	tegn etterfulgt av et punktum etterfulgt av minst ett tegn. */
	var epostRe = /^$|^.+@.+\..+/
	epost = document.getElementById("epost").value;
	if (epostRe.test(epost) == true) {
		document.getElementById("eposterror").style.display = "none";
		godkjentfelt["epostsjekk"] = true;
	} else {
		document.getElementById("eposterror").style.display = "inline-block";
		godkjentfelt["epostsjekk"] = false;
	}
}

function adresseValidering() {
	/* Regexen sjekker at adressen må inneholde mist en bokstav for gatenavnet
	og minst ett tall for husnummeret. The er tillatt med flere ord i
	gatenavnet og en bokstav mellom A-Z for husbokstaven. Leilighetsnummer er
	også tillatt, men kan ikke overstige 3 siffer. Leilighetsnummeret kan
	starte med en bokstav. Husbokstav og leilighetsnummer er valgfritt.
	Husnummeret kan ikke overstige 4 siffer.
	Eksempel: Elgeseter gate 1A H101. */
	var adresseRe = /^$|^([æøåÆØÅA-Za-z]+ {1})+[\d]{1,4}[A-Za-z]?( {1}[A-Za-z]?[\d]{1,3})?$/;
	adresse = document.getElementById("adresse").value;
	if (adresseRe.test(adresse) == true) {
		document.getElementById("adresseerror").style.display = "none";
		godkjentfelt["adressesjekk"] = true;
	} else {
		document.getElementById("adresseerror").style.display = "inline-block";
		godkjentfelt["adressesjekk"] = false;
	}
}

function postkodeValidering() {
	// Regexen tillater kun 4 siffer
	var postkodeRe = /^$|^[\d]{4}$/;
	postkode = document.getElementById("postnr").value;
	if (postkodeRe.test(postkode) == true) {
		document.getElementById("postnrerror").style.display = "none";
		/* Postnummeret sendes videre til placeAutocomplete() slik at
		poststedet fylles inn automagisk. */
		automatiskPoststed(document.getElementById("postnr").value);
		godkjentfelt["postkodesjekk"] = true;
	} else {
		document.getElementById("postnrerror").style.display = "inline-block";
		document.getElementById("poststederror").style.display = "none";
		document.getElementById("poststed").value = "";
		godkjentfelt["postkodesjekk"] = false;
	}
}

var postkodeObjekt = {};

/* Funksjonen henter inn alle postnummer og poststeder som er registrert i
Norge. Dette gjøres ved å hente en .txt fil med en HTTP request (det er her
CORS-policy kommer inn og kan skape litt kluss). Postnumrene og poststedene
lagres i et objekt der poststedet kan hentes ut ved hjelp av postkoden som key. */

function hentPostkoder() {
	var postfil = new XMLHttpRequest();
	postfil.open("GET", "../Postnummerregister-utf.txt", true);
	postfil.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			var tekst = postfil.responseText;
			tekst.split('\n').forEach(element => {
				var temp =[];
				temp.push(element.split('\t'));
				postkodeObjekt[temp[0][0]] = temp[0][1];
			})
		}
	}
	postfil.send(null);
}

/* Funksjonen mottar et postnummer og fyller inn det tilhørende poststedet
automatisk i skjemaet. Dersom postnummeret ikke eksisterer vil det stå "Ugyldig
postnummer" og en feilmelding vil dukke opp. */

function automatiskPoststed(postkode) {
	if (document.getElementById('postnr').value == "") {
		document.getElementById('poststed').value == "Poststed";
		godkjentfelt["poststedsjekk"] = false;
	} else if (postkodeObjekt[postkode] == undefined) {
		document.getElementById("poststed").value = "Ugyldig postnummer";
		godkjentfelt["poststedsjekk"] = false;
		document.getElementById("poststederror").style.display = "inline-block";
	}else {
		document.getElementById("poststed").value = postkodeObjekt[postkode];
		skjema_klart = true;
		godkjentfelt["poststedsjekk"] = true;
		document.getElementById("poststederror").style.display = "none";
	}
}

// De to neste funksjonene er bare for å vise feilmeldingen i et overlay.

function overlay(id) {
	document.getElementById("error_overlay").style.display = "block";
	document.getElementById("feilmelding").innerHTML = feilmeldinger[id];
	document.body.style.overflow = "hidden";
}

function lukkOverlay() {
	document.getElementById("error_overlay").style.display = "none";
	document.body.style.overflow = "scroll";
}

window.onload = hentPostkoder();

// Denne funksjonen gir en melding i browseren at skjemaet ble sendt inn.

var skjema = document.getElementById("skjema");

function sendSkjema() {
	if (Object.keys(godkjentfelt).every(p => godkjentfelt[p] === true)) {
		skjema.reset();
		return window.alert("Skjemaet ble sendt inn");
	} else {
		return window.alert("Feltene er ikke godkjent, trykk på utropstegnet for å lese feilmeldingen");
	}
}
