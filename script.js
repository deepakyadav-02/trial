document.getElementById("yesBtn").addEventListener("click", function () {
  window.location.href = "congrats.html";
});

document.getElementById("noBtn").addEventListener("mouseover", function () {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const randomX = Math.floor(Math.random() * (viewportWidth - 150)); // Adjusted to keep button within viewport
  const randomY = Math.floor(Math.random() * (viewportHeight - 50)); // Adjusted to keep button within viewport
  const noButton = document.getElementById("noBtn");
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

document.getElementById("noBtn").addEventListener("click", function () {
  this.innerHTML = "dont";
});
