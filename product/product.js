const backLink = "<br><br><a href='javascript:window.history.back()'>Zurück</a>";

function checkForParams() {
    const parameter = new URLSearchParams(location.search);
    const product = parameter.get("p");
    if (product == null) {
        return false;
    } else return product;
}

async function getProducts(url) {
    const response = await fetch(url);
    return response.json();
}

getProducts("/ElectriCity/product/data/test.json")
    .then((data) => {
        console.log(data); // Process the JSON data here
    })
    .catch((error) => {
        document.getElementsByClassName("content").item(0).innerHTML = "<h1>500 Internal Server Error</h1>"
        console.error("Beim Laden der JSON Datei ist ein Fehler aufgetreten:\n", error);
    });



function main() {
    const product = checkForParams();
    if (product == false) {
        document.getElementsByClassName("content").item(0).innerHTML = "<h1>400 Bad Request</h1><hr><p>Es wurde kein Produkt gefunden. Überprüfe die Browserkonsole für mehr Infos.</p>" + backLink;
        console.error(`Die URL-Parameter ("${location.search}") enthalten kein Produkt!`);
        return;
    }

}


/* Usage:
loadJSON().then(parsedData => {
    //Do something with parsedData;
});
*/

/*
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "errorMsg";
*/