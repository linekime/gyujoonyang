fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

fetch("footer2.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer2-placeholder").innerHTML = data;
  });
