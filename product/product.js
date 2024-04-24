function checkForParams(){
    const parameter = new URLSearchParams(location.search);
    const produkt = parameter.get("p");
    if (produkt == null) {
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "<h1>404 Not found</h1><hr>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>";
        return 1;
    } else return 0;
}

function main(){
    if (checkForParams() == 1) return 1;

}