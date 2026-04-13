window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key.toLowerCase() === "q") {
      event.preventDefault();
      alert("It worked!")
    }
  });
});