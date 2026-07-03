function initializeMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.nav-mobile-menu');
    const mobileOverlay = document.querySelector('.nav-overlay');

    if (!navToggle || !mobileMenu) {
        return false;
    }

    if (navToggle.dataset.initialized === 'true') {
        return true;
    }

    navToggle.dataset.initialized = 'true';

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        const expanded = mobileMenu.classList.contains('open');
        navToggle.setAttribute('aria-expanded', expanded);
    });

    mobileOverlay.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        const expanded = mobileMenu.classList.contains('open');
        navToggle.setAttribute('aria-expanded', expanded);
    });

    return true;
}

if (!initializeMobileNav()) {
    const observer = new MutationObserver(() => {
        if (initializeMobileNav()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}