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

headerlink = "https://dercoolejustin.github.io/ElectriCity/header.html";
footerlink = "https://dercoolejustin.github.io/ElectriCity/footer.html";
stylelink = "https://dercoolejustin.github.io/ElectriCity/style.css";
faviconlink = "https://dercoolejustin.github.io/ElectriCity/images/favicon.ico";

fetch(headerlink)
  .then(response => response.text())
  .then(data => {
    const newContent = document.createElement('div');
    newContent.innerHTML = data;
    newContent.className = "header";
    document.body.appendChild(newContent);
  })
  .catch(error => console.error('An error occurred:', error));

fetch(footerlink)
  .then(response => response.text())
  .then(data => {
    const newContent = document.createElement('div');
    newContent.innerHTML = data;
    newContent.className = "footer";
    document.body.appendChild(newContent);
  })
  .catch(error => console.error('An error occurred:', error));

fetch(stylelink).then(response => response.text()).then(data => {
    const newContent = document.createElement("style")
    newContent.innerHTML = data;
    document.head.appendChild(newContent);
}).catch(error => console.error("An error occured:", error));

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = faviconlink;
favicon.type = "image/vnd.microsoft.icon";
document.head.appendChild(favicon);