document.addEventListener("DOMContentLoaded", function () {
    // === Typing Effect ===
    const words = [
        "Python enthusiast 🐍",
        "Data engineer at heart 💾",
        "Snowflake, DuckDB, and React wizard ⚡",
        "Building fast dashboards 🚀"
    ];
    let i = 0;
    const typingSpeed = 60;
    const typewriteEl = document.getElementById("typewrite");

    function typingEffect(text, el, cb) {
        let j = 0;
        el.textContent = '';
        const timer = setInterval(() => {
            if (j < text.length) {
                el.textContent += text.charAt(j++);
            } else {
                clearInterval(timer);
                setTimeout(cb, 1000);
            }
        }, typingSpeed);
    }

    function loopTyping() {
        typingEffect(words[i % words.length], typewriteEl, () => {
            i++;
            loopTyping();
        });
    }
    if (typewriteEl) loopTyping();

    // === Theme Toggle (Desktop & Mobile) ===
    const themeToggles = [document.getElementById("theme-toggle"), document.getElementById("theme-toggle-mobile")];
    const html = document.documentElement;
    const userPref = localStorage.getItem("theme");
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkInit = userPref === "dark" || (!userPref && systemPref);

    function applyTheme(isDark) {
        html.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggles.forEach(btn => {
            if (btn) btn.textContent = isDark ? "🌙" : "☀️";
        });
    }

    applyTheme(isDarkInit);

    themeToggles.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", () => {
                const isDark = !html.classList.contains("dark");
                applyTheme(isDark);
            });
        }
    });

    // === Smooth Scroll ===
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMenu(); // auto close on mobile
            }
        });
    });

    // === Mobile Menu Toggle ===
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    let isMenuOpen = false;

    function openMenu() {
        mobileMenu.classList.remove("hidden");
        requestAnimationFrame(() => {
            mobileMenu.classList.add("opacity-100");
            mobileMenu.classList.remove("opacity-0");
        });
        menuToggle.textContent = "✕";
        isMenuOpen = true;
    }

    function closeMenu() {
        mobileMenu.classList.remove("opacity-100");
        mobileMenu.classList.add("opacity-0");
        menuToggle.textContent = "☰";
        isMenuOpen = false;
        // Delay hidden class until after animation
        setTimeout(() => {
            if (!isMenuOpen) mobileMenu.classList.add("hidden");
        }, 300);
    }

    menuToggle.addEventListener("click", () => {
        isMenuOpen ? closeMenu() : openMenu();
    });

    // Close menu when any nav-link inside mobile menu clicked
    const links = mobileMenu.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Optional: Theme toggle inside mobile
    const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener("click", closeMenu);
    }

    // === Navbar Scroll Transparency ===
    const navbar = document.getElementById("navbar");
    function updateNavbar() {
        if (window.scrollY === 0) {
            navbar.classList.remove("bg-white", "dark:bg-gray-800", "shadow-md");
            navbar.classList.add("bg-transparent");
        } else {
            navbar.classList.add("bg-white", "dark:bg-gray-800", "shadow-md");
            navbar.classList.remove("bg-transparent");
        }
    }
    if (navbar) {
        updateNavbar();
        window.addEventListener("scroll", updateNavbar);
    }
});