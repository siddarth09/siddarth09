// Placeholder for future animations
console.log("Portfolio loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "Building across autonomy, space systems, and robotics.",
    "From F1TENTH racing to Space Station OS.",
    "Bridging robotics research with real-world systems.",
    "Engineering autonomy: from warehouse robots to humanoid locomotion."
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