document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Menu Logic
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Animate Hamburger Bars
    const bars = hamburger.querySelectorAll(".bar");
    if (hamburger.classList.contains("active")) {
      bars[0].style.transform = "translateY(9px) rotate(45deg)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "translateY(-9px) rotate(-45deg)";
    } else {
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    }
  });

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      // Reset bars
      const bars = hamburger.querySelectorAll(".bar");
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
    });
  });

  // 2. Navbar Background Scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 3. Reveal Animations (Scroll)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // 4. Trainer Card Click (Expand Info)
  const cards = document.querySelectorAll(".trainer-card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".close-info")) {
        e.stopPropagation();
        card.classList.remove("active");
        return;
      }
      cards.forEach((c) => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });
});
