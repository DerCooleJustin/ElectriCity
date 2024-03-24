headerLink = "https://dercoolejustin.github.io/ElectriCity/header.html";
footerLink = "https://dercoolejustin.github.io/ElectriCity/footer.html";
styleLink = "https://dercoolejustin.github.io/ElectriCity/style.css";

fetch(headerlink, {mode: "no-cors"})
  .then(response => response.text())
  .then(data => {
    const newContent = document.createElement('div');
    newContent.innerHTML = data;
    newContent.className = "header";
    document.body.appendChild(newContent);
  })
  .catch(error => console.error('An error occurred:', error));

fetch(footerlink, {mode: "no-cors"})
  .then(response => response.text())
  .then(data => {
    const newContent = document.createElement('div');
    newContent.innerHTML = data;
    newContent.className = "footer";
    document.body.appendChild(newContent);
  })
  .catch(error => console.error('An error occurred:', error));

fetch(stylelink, {mode: "no-cors"}).then(response => response.text()).then(data => {
    const newContent = document.createElement("style")
    newContent.innerHTML = data;
    document.head.appendChild(newContent);
}).catch(error => console.error("An error occured:", error));
