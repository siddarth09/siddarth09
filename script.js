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
