const skillBars = document.querySelectorAll(".skills-bar-fill");

const resetSkillBar = (bar) => {
    bar.style.width = "50%";
};

const animateSkillBar = (bar) => {
    const targetWidth = bar.dataset.fill || "100";
    bar.style.width = `${targetWidth}%`;
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const bar = entry.target;

        if (entry.isIntersecting) {
            resetSkillBar(bar);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    animateSkillBar(bar);
                });
            });
        } else {
            resetSkillBar(bar);
        }
    });
}, {
    threshold: 0.35
});

skillBars.forEach((bar) => {
    resetSkillBar(bar);
    skillsObserver.observe(bar);
});