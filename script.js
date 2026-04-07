window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "q") {
      event.preventDefault();

      alert("It worked!")
    }
  });
});