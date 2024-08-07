document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const outputField = document.getElementById("output");

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const command = inputField.value.trim();
            outputField.textContent += `\n$ ${command}`;
            inputField.value = "";

            if (command === "$/Cr4shFu5380x/") {
                window.location.href = "https://www.youtube.com";
            } else {
                outputField.textContent += `\nCommande inconnue: ${command}`;
            }

            // Scroll to the bottom of the console
            outputField.scrollTop = outputField.scrollHeight;
        }
    });
});
