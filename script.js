// Sélection du bouton
const button = document.querySelector(".button");

// Ajout d'un gestionnaire d'événement au clic
button.addEventListener("click", () => {
  button.classList.toggle("active");
});
