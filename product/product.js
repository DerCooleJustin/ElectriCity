function checkForParams(){
    const parameter = new URLSearchParams(location.search);
    product = parameter.get("p");
    if (product == null) {
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "<h1>404 Not found</h1><hr>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>";
        return 1;
    } else return 0;
}

function loadJSON(){
    fetch(`/ElectriCity/product/data/${product}.json`).then((response) => response.json()).then((json) => document.write(json));

}

function main(){
    if (checkForParams() == 1) return 1;
    loadJSON();
}

main();