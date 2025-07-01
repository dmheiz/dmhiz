  document.addEventListener("DOMContentLoaded", function () {
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
  });
    document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector("nav ul");

      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    });
