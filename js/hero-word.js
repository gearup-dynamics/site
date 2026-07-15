const words = ["Service", "Repair", "Maintenance", "Detailing", "Solutions"];
let index = 0;
const rotatingWord = document.getElementById("rotatingWord");

if (rotatingWord) {
    function rotateWord() {
        // Fade out current word
        rotatingWord.classList.add("fade-out");

        setTimeout(() => {
            // Update the word after fade-out
            index = (index + 1) % words.length;
            rotatingWord.textContent = words[index];

            // Fade back in
            rotatingWord.classList.remove("fade-out");
        }, 250); // Matches the CSS transition time
    }
    setInterval(rotateWord, 1500);
}

