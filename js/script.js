// Highlight nav link and fade in features
document.addEventListener("DOMContentLoaded", () => {
  // --- Highlight nav link ---
  const links = document.querySelectorAll(".nav-links a");
  const path = window.location.pathname;
  const currentPage = path.substring(path.lastIndexOf("/") + 1) || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // --- Fade in features on scroll ---
  const features = document.querySelectorAll(".feature");

  const revealFeatures = () => {
    const triggerBottom = window.innerHeight * 0.85;

    features.forEach(feature => {
      const featureTop = feature.getBoundingClientRect().top;

      if (featureTop < triggerBottom) {
        feature.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealFeatures);
  revealFeatures(); // trigger on load in case some features are in view
});
