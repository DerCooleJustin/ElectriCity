headerlink = "https://dercoolejustin.github.io/ElectriCity/header.html";
footerlink = "https://dercoolejustin.github.io/ElectriCity/footer.html";
stylelink = "https://dercoolejustin.github.io/ElectriCity/style.css";
faviconlink = "https://dercoolejustin.github.io/ElectriCity/images/favicon.ico";
usersLink = "https://dercoolejustin.github.io/ElectriCity/users.js";

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

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = stylelink;
document.head.appendChild(style);

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = faviconlink;
favicon.type = "image/vnd.microsoft.icon";
document.head.appendChild(favicon);

const userScript = document.createElement("script");
userScript.type = "text/javascript";
userScript.src = usersLink;
document.head.appendChild(userScript);