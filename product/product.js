function checkForParams(){
    let parameter = new URLSearchParams(location.search);
    let produkt = parameter.get("p");
    if (produkt == null) {
        document.write("<h1>404</h1><br>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>");
        return 0;
    }
}