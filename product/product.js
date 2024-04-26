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
    return fetch(`/ElectriCity/product/data/${product}.json`);
}

function check404(data){
    if (data.status == 404) {
        const content = document.getElementsByClassName("content");
        content.item(0).innerHTML = "<h1>404 Not found</h1><hr>Das Produkt wurde nicht gefunden! Ist der Link richtig?<br><br><a href='javascript:window.history.back()'>Zurück</a>";
        return true;
    } else return false;
}

function main(){
    clearInterval(productInterval);
    if (checkForParams() == false) return false;

    if(check404(loadJSON())) alert ("ERROR!");

}

productInterval = setInterval(main, 10);


function loadJSON() {
    return fetch('/ElectriCity/product/data/test.json')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            // Handle any errors here
            console.error('There has been a problem with your fetch operation:', error);
            throw error; // Re-throw the error to propagate it
        });
}

// Usage:
let status;
loadJSON().then(parsedData => {
    status = parsedData.status;
})
