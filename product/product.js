function checkForParams(){
    const parameter = new URLSearchParams(location.search);
    product = parameter.get("p");
    if (product == null) {
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "<h1>404 Not found</h1><hr>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>";
        return false;
    } else return true;
}

function loadJSON(){
    let Data;
    fetch(`/ElectriCity/product/data/${product}.json`).then((response) => Data = response);
    return Data;
}

function check404(data){
    if (data.status == 404) {
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "<h1>404 Not found</h1><hr>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>";
        return true;
    } else return false;
}

function main(){
    if (checkForParams() == false) return false;
    if(check404(loadJSON())) alert ("ERROR!");
}

main();