
fetch("/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key.toLowerCase() === "q") {
      event.preventDefault();
      alert("It worked!")
    }

    if(event.shiftKey && event.key === "?") {
      event.preventDefault();
      alert("SHIFT + Q");
    }

  });
});

