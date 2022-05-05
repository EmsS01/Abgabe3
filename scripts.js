
const VornameInput = document.getElementById("Vorname-input");
const NachnameInput = document.getElementById("Nachname-input");
const GeburtstagInput = document.getElementById("Geburtstag-input");
const EingabeInput = document.getElementById("Eingabe");

EingabeInput.addEventListener("click", createNewEventEntry);


const Vorname = VornameInput.value;
const Nachname = NachnameInput.value;
const Geburtstag = GeburtstagInput.value;


function createNewEventEntry() {

    const Vorname = VornameInput.value;
    const Nachname = NachnameInput.value;
    const Geburtstag = GeburtstagInput.value;
    
 }
     
function validierung(Vorname, Nachname, Geburtstag) {
    if (!Vorname || !Nachname || !Geburtstag) {
        alert("Please fill out all input fields!");
        return false; }

        if (isNaN(Geburtstag)) {
            alert("Gebe den Geburtstag als Zahl an!");
            return false;
        }

return true;
}

function enterEvent(evt) {
    evt.preventDefault();
    createNewEventEntry();
    validierung();
}

