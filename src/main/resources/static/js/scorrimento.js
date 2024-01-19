document.addEventListener("DOMContentLoaded", function() {
    const adImage = document.getElementById("adImage");
    const buttons = adImage.querySelectorAll("button");
    const radioContainer = document.querySelector(".scorrimento");

    const imageNames = ["img1.jpg", "img2.jpg"]; // Aggiungi altri nomi di file secondo necessità
    let currentIndex = 0;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const indexChange = parseInt(this.getAttribute("data-index"));
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
        const img = adImage.querySelector("img");
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



