  document.addEventListener("DOMContentLoaded", function () {
    // Scroll-based fade-in
    const boxes = document.querySelectorAll('.services .service-box');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    boxes.forEach(box => observer.observe(box));

    // Toggle menu with icon change
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      openIcon.style.display = menu.classList.contains("show") ? "none" : "inline";
      closeIcon.style.display = menu.classList.contains("show") ? "inline" : "none";
    });
  });
  
