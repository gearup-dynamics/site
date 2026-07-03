fetch("/partials/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;
    });

fetch("/partials/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });