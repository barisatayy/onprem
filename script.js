// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Scroll animations for services
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll(".service-card").forEach((card) => {
  observer.observe(card);
});

// Observe pricing cards
document.querySelectorAll(".pricing-card").forEach((card) => {
  observer.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.2)";
  }
});

// Create floating particles for hero section
function createParticles() {
  const heroParticles = document.querySelector(".hero-particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "rgba(255, 255, 255, 0.3)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      Math.random() * 3 + 2
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";
    heroParticles.appendChild(particle);
  }
}

// Create footer particles
function createFooterParticles() {
  const footerParticles = document.querySelector(".footer-particles");
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "1px";
    particle.style.height = "1px";
    particle.style.background = "rgba(255, 255, 255, 0.3)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `twinkle ${
      Math.random() * 3 + 2
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";
    footerParticles.appendChild(particle);
  }
}

// Form submission
document
  .querySelector(".contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Show success message (you can replace this with actual form submission)
    alert(
      "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
    );

    // Reset form
    this.reset();
  });

// Newsletter subscription
document.querySelector(".newsletter").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;

  if (email) {
    alert("Bültenimize başarıyla abone oldunuz!");
    this.querySelector('input[type="email"]').value = "";
  }
});

// Initialize particles when page loads
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  createFooterParticles();

  // Add stagger animation to service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.3}s`;
  });

  // Add stagger animation to pricing cards
  const pricingCards = document.querySelectorAll(".pricing-card");
  pricingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});

// Pricing card hover effects
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotateY(5deg)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotateY(0deg)";
  });
});

// Service card wave effect
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const wave = document.createElement("div");
    wave.style.position = "absolute";
    wave.style.top = "0";
    wave.style.left = "-100%";
    wave.style.width = "100%";
    wave.style.height = "100%";
    wave.style.background =
      "linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.2), transparent)";
    wave.style.transition = "left 0.5s ease";
    wave.style.pointerEvents = "none";

    this.appendChild(wave);

    setTimeout(() => {
      wave.style.left = "100%";
    }, 10);

    setTimeout(() => {
      if (wave.parentNode) {
        wave.parentNode.removeChild(wave);
      }
    }, 500);
  });
});
