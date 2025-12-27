document.addEventListener("DOMContentLoaded", () => {
  // ========= HERO FADE-IN ON PAGE LOAD =========
  const heroElements = document.querySelectorAll(
    ".hero .hi, .hero .name-main, .hero .role, .hero .social-icons, .hero .stats, .btn-custom"
  );
  
  heroElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 200); // stagger animation
  });

  // ========= PROGRESS BARS INITIAL SET =========
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    bar.setAttribute("data-width", bar.style.width);
    bar.style.width = "0";
  });

  // ========= SCROLL ANIMATIONS FOR CARDS & SKILLS =========
  const scrollElements = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .about-card"
  );

  // Initial setup for scroll elements
  scrollElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });

  function animateOnScroll() {
    const windowBottom = window.innerHeight;

    scrollElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowBottom / 1.2 && !el.classList.contains("visible")) {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.classList.add("visible");
      }
    });

    // Animate progress bars when skills-section visible
    const skillsSection = document.querySelector(".skills-section");
    if (skillsSection) {
      const skillsTop = skillsSection.getBoundingClientRect().top;
      if (skillsTop < windowBottom / 1.2) {
        progressBars.forEach(bar => {
          bar.style.transition = "width 1.2s ease-in-out";
          bar.style.width = bar.getAttribute("data-width");
        });
      }
    }
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load if elements already visible

  // ========= OPTIONAL: SMOOTH SCROLL FOR NAV LINKS =========
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70, // navbar height offset
          behavior: "smooth"
        });
      }
    });
  });
});
