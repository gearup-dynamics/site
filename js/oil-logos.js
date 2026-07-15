const slider = document.getElementById("oil-logo-slider");

if (slider) {
    startLogoSlider();
}

async function startLogoSlider() {
    const response = await fetch("/data/oil-logos.json");

    if (!response.ok) {
        throw new Error(
            `Could not load oil logos: ${response.status}`
        );
    }

    const oilLogos = await response.json();

    let currentIndex = 0;

    function renderLogoGroup() {
        slider.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const logoIndex =
                (currentIndex + i) % oilLogos.length;

            const logo = oilLogos[logoIndex];

            const img = document.createElement("img");
            img.src = logo.src;
            img.alt = logo.alt;
            img.classList.add("oil-logo");

            slider.appendChild(img);
        }
    }

    function nextLogoGroup() {
        slider.classList.remove("entering");
        slider.classList.add("leaving");

        setTimeout(() => {
            currentIndex =
                (currentIndex + 3) % oilLogos.length;

            renderLogoGroup();

            slider.classList.remove("leaving");
            slider.classList.add("entering");
        }, 600);
    }

    renderLogoGroup();
    slider.classList.add("entering");

    setInterval(nextLogoGroup, 3000);
}