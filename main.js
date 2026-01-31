document.addEventListener("DOMContentLoaded", () => {

  /* ================= MENU ================= */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
      );
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  /* ================= SCROLL REVEAL ================= */
  if (typeof ScrollReveal !== "undefined") {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__container p", scrollRevealOption);
    ScrollReveal().reveal(".header__container h1", {
      ...scrollRevealOption,
      delay: 500,
    });
  }

  /* ================= FAQ ================= */
  const faq = document.querySelector(".faq__grid");
  if (faq) {
    faq.addEventListener("click", (e) => {
      const faqCard = e.target.closest(".faq__card");
      if (!faqCard) return;

      faq.querySelectorAll(".faq__card").forEach((item) =>
        item.classList.remove("active")
      );
      faqCard.classList.add("active");
    });
  }

  /* ================= SWIPER ================= */
  if (typeof Swiper !== "undefined" && document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      loop: true,
      pagination: { el: ".swiper-pagination" },
    });
  }

  /* ================= THEME TOGGLE ================= */
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-theme");
      icon.className = "ri-moon-line";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      const isDark = body.classList.contains("dark-theme");
      icon.className = isDark ? "ri-moon-line" : "ri-sun-line";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  /* ================= STICKY HEADER ================= */
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 50);
    });
  }

});
