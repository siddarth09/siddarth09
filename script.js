// Placeholder for future animations
console.log("Portfolio loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "Building operating systems for future space stations.",
    "Designing intelligent humanoids for the next generation of exploration.",
    "Blending robotics, AI, and mathematics for space and humanity.",
    "Driven to push the boundaries of what’s possible."
  ];

  let index = 0;
  const taglineElement = document.getElementById("hero-tagline");

  setInterval(() => {
    index = (index + 1) % taglines.length;
    taglineElement.textContent = taglines[index];
  }, 4000); // changes every 4 seconds
});

const carousel = document.getElementById("projects-carousel");
  let scrollAmount = 0;
  const scrollStep = 420; // card width + gap
  const delay = 5000; // 5 seconds

  function autoScroll() {
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      // Reset to start
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }

  setInterval(autoScroll, delay);