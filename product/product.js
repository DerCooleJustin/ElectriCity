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

async function main() {
    const product = checkForParams();
    if (product == false) {
        document.getElementsByClassName("content").item(0).innerHTML = "<h1>400 Bad Request</h1><hr><p>Es wurde kein Produkt gefunden. Überprüfe die Browserkonsole für mehr Infos.</p>" + backLink;
        console.error(`Die URL-Parameter ("${location.search}") enthalten kein Produkt!`);
        return;
    }
    let json;
    await getProducts(`/ElectriCity/product/data/${product}.json`)
        .then((data) => {
            json = data;
        })
        .catch((error) => {
            if (error.message.includes("not valid JSON")) { //404, GitHub returns HTML which is not valid JSON --> `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`
                console.info("Wenn ?p keinen externen Link beinhaltet, ist das folgende mit sehr hoher Wahrscheinlichkeit ein 404 Fehler. Erklärung:\nGitHub returns HTML when a 404 page is being accessed, but HTML is not valid JSON (under most circumstances) --> `SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON`");
                document.getElementsByClassName("content").item(0).innerHTML = "<h1>404 Not found</h1><hr><p>Es wurde kein Produkt gefunden. Wahrscheinlich ist der Link falsch.<br>Für mehr Infos, überprüfe die Browserkonsole.</p>" + backLink;
            } else { //Unknown Error, 500
                document.getElementsByClassName("content").item(0).innerHTML = "<h1>500 Internal Server Error</h1><hr><p>Es ist ein unbekannter Fehler aufgetreten.<br>In der Browserkonsole findest du mehr Infos.</p>" + backLink;
            }
            console.error(error);
            return;
        });
    const productInfo = document.getElementsByClassName("produktinfo").item(0);
    const image = productInfo.getElementsByClassName("image").item(0).getElementsByTagName("img").item(0);
    const text = productInfo.getElementsByClassName("produkttext").item(0);
    const specs = document.getElementsByClassName("produkttext").item(1);
    const title = document.getElementById("title");
    image.src = json.img;
    text.innerHTML = json.text + "<br><a href='/ElectriCity/impressum'>" + json.price + "€ | Jetzt kaufen</a>";
    specs.innerHTML = json.specs;
    title.innerHTML = json.title;
}

main();