const initializeServiceGrid = () => {
    const grid = document.getElementById("services-grid");

    if (!grid) {
        return;
    }

    fetch("/data/services.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load services.json: ${response.status}`);
            }

            return response.json();
        })
        .then((services) => {
            grid.innerHTML = "";

            services
                .filter((service) => service.onGrid)
                .forEach((service) => {
                    const card = document.createElement("div");
                    card.className = "service-card";

                    card.innerHTML = `
                        <h1>${service.name}</h1>
                        <h2>${service.descWeb}</h2>
                        <h3>${service.priceLabel}${service.partsExtra ? '<span class="sup-note">*</span>' : ''}</h3>
                    `;

                    grid.appendChild(card);
                });
        })
        .catch((error) => {
            console.error("Service grid failed to load:", error);
        });
};

initializeServiceGrid();