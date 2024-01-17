import { Component } from '@angular/core';

document.addEventListener("DOMContentLoaded", () => {
  const adImage = document.getElementById("adImage") as HTMLElement;
  const buttons = adImage.querySelectorAll("button");
  const radioContainer = document.querySelector(".scorrimento") as HTMLElement;

  const imageNames = ["img1.jpg", "img2.jpg"]; // Aggiungi altri nomi di file secondo necessità
  let currentIndex = 0;

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const indexChange = parseInt(this.getAttribute("data-index") || "0", 10);
      currentIndex += indexChange;

      if (currentIndex < 0) {
        currentIndex = imageNames.length - 1;
      } else if (currentIndex >= imageNames.length) {
        currentIndex = 0;
      }

      updateImage();
      updateRadioDivs();
    });
  });

  function updateImage() {
    const img = adImage.querySelector("img") as HTMLImageElement;
    img.classList.add("fade-out");
    setTimeout(() => {
      img.src = imageNames[currentIndex];
      img.classList.remove("fade-out");
    }, 400); // La durata della transizione in millisecondi
  }

  // Aggiorna i div radio al primo caricamento della pagina
  updateRadioDivs();

  function updateRadioDivs() {
    // Rimuovi tutti i div radio esistenti
    while (radioContainer.firstChild) {
      radioContainer.removeChild(radioContainer.firstChild);
    }

    // Aggiungi un div radio per ogni immagine
    for (let i = 0; i < imageNames.length; i++) {
      const radioDiv = document.createElement("div");
      radioDiv.classList.add("radiov");

      // Imposta il bordo
      radioDiv.style.border = i === currentIndex ? "2px solid var(--Scorrimento)" : "0.5px solid var(--Scorrimento)";

      // Imposta il colore di sfondo (fill) per il div corrente
      radioDiv.style.backgroundColor = i === currentIndex ? "var(--Scorrimento)" : "transparent";

      radioContainer.appendChild(radioDiv);
    }
  }
});


@Component({
  selector: 'app-scorrimento',
  templateUrl: './scorrimento.component.html',
  styleUrl: './scorrimento.component.css'
})
export class ScorrimentoComponent {

}
