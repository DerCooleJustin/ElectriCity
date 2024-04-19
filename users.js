String.prototype.hashCode = function() {
    var hash = 0,
    i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function register(){
    username = prompt("Wie lautet dein Nutzername?");
    localStorage.setItem("username", username);
    localStorage.setItem("password", prompt(`Willkommen, ${username}! Wie lautet dein Passwort?`).hashCode());
    location.href = location.href;
}

function timeout(){
    localStorage.setItem("timeout", Math.floor(Date.now() / 1000));
    location.href = location.href;
}

function logout(){
    localStorage.setItem("username", "NOT_LOGGED_IN__EC");
    location.href = location.href;
}


window.addEventListener("DOMContentLoaded", () => {
    username = localStorage.getItem("username");
password = localStorage.getItem("password");
timeout = localStorage.getItem("timeout");
triesLeft = localStorage.getItem("triesLeft");
lockedTime = localStorage.getItem("lockedTime");
if (lockedTime == null) {
    localStorage.setItem("lockedTime", 0);
    location.href = location.href;
}
if (triesLeft == null) {
    localStorage.setItem("triesLeft", 5);
    location.href = location.href;
}
if (triesLeft < 1) {
    if (lockedTime > Math.floor(Date.now()/1000)) {
        alert(`Dein Konto ist noch für ${lockedTime-Math.floor(Date.now()/1000)} Sekunden gesperrt.`)
        window.back();
    } else {
        localStorage.setItem("triesLeft", 5);
        localStorage.setItem("lockedTime", 0);
        location.href = location.href;
    }
}
if (username == null){
    //Alert the user he can log in on the user menu and set username to "anmelden"
    document.getElementsByClassName("username")[0].innerHTML="anmelden";
    /*Diese lange Nachricht begrüßt den Nutzer*/ alert("Willkommen! Wir haben bemerkt, dass du diese Seite zum ersten Mal besuchst.\nDu kannst dich über das Benutzermenü registrieren. Dieses öffnest du, indem du rechts über dein Benutzerbild fährst. (An Touchscreen nutzer: Du kannst auch tippen.)\nDu siehst diese Nachricht nur einmal.\n\nPS: Diese Seite benutzt den LocalStorage. Er ist quasi ein Cookie, also eine Datei, die auf deinem gerät gespeichert wird, aber ist einfacher für mich zu nutzen. Indem du diese Website benutzt, erklärst du dich damit einverstanden.");
    localStorage.setItem("username", "NOT_LOGGED_IN__EC");
    username = "NOT_LOGGED_IN__EC"
} else if (username == "NOT_LOGGED_IN__EC") {
    document.getElementsByClassName()[0].innerHTML = "anmelden";
} else {
    if (timeout < Math.floor(Date.now() / 1000)){
        input = prompt(`Willkommen zurück! Bitte gib dein Passwort ein oder schreibe "vergessen", um es zurück zu setzen:`);
        if (input.hashCode() == password) {
            //Change login button to log out
            document.getElementsByClassName("username")[0].innerHTML = username;
            document.getElementsByClassName("register")[0].style = "display: none;";
            document.getElementsByClassName("logout")[0].style = "display: block;";
            document.getElementsByClassName("timeout")[0].style = "display: block;";
            localStorage.setItem("timeout", Math.floor(Date.now() / 1000) + (15*60));
        } else {
            if (input == "vergessen") {
                input = prompt("Um dein Passwort zurückzusetzen, gib bitte deinen Nutzernamen ein:");
                if (input == username) {
                    localStorage.setItem("password", prompt("Gib bitte dein neues Passwort ein:").hashCode());
                    location.href = location.href;
                } else {
                    alert("Falscher Nutzername.")
                }
            } else {
                alert(`Falsches Passwort. Du hast noch ${triesLeft-1} Versuche übrig, bevor dein Konto für 5 Minuten geperrt wird.`);
                localStorage.setItem("triesLeft", triesLeft-1);
                localStorage.setItem("lockedTime", Math.floor(Date.now() / 1000) + (5*60))
                location.href = location.href;
            }
        }
    } else {
        localStorage.setItem("timeout", Math.floor(Date.now() / 1000) + (15*60));
    }
}
});

