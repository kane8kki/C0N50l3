document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const outputField = document.getElementById("output");

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const command = inputField.value.trim();
            outputField.textContent += `\n$ ${command}`;
            inputField.value = "";

            if (command === "$/Cr4shFu5380x/") {
                // Jouer le son
                const audio = new Audio('crash.mp3');
                audio.play();

                // Redirection vers YouTube
                window.location.href = "https://www.youtube.com";
            } else {
                outputField.textContent += `\nCommande inconnue: ${command}`;
            }

            // Faire défiler vers le bas de la console
            outputField.scrollTop = outputField.scrollHeight;
        }
    });
});
