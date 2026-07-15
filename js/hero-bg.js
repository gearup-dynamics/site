const bgImages = [
    "../assets/images/section1/1.jpg",
    "../assets/images/section1/2.jpg",
    "../assets/images/section1/3.jpg",
    "../assets/images/section1/4.jpg",
    "../assets/images/section1/5.jpg",
    "../assets/images/section1/6.jpg",
];

let currentBg = 0;
const bgEl = document.getElementById("hero-bg");

if (bgEl) {
    function switchBackground() {
        currentBg = (currentBg + 1) % bgImages.length;
        bgEl.style.opacity = 0;

        setTimeout(() => {
            bgEl.style.backgroundImage = `url(${bgImages[currentBg]})`;
            bgEl.style.opacity = 1;
        }, 1000); // fade-out duration
    }

    // Initial load
    bgEl.style.backgroundImage = `url(${bgImages[0]})`;
    bgEl.style.transition = "opacity 1.5s ease-in-out";

    // Start background cycling
    setInterval(switchBackground, 15000); // every 15 seconds
};

