// Add dynamic hover or click effects for the skills section
document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");
  
    skillItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const tooltip = item.querySelector(".tooltip");
        tooltip.style.display = "block";
      });
  
      item.addEventListener("mouseleave", () => {
        const tooltip = item.querySelector(".tooltip");
        tooltip.style.display = "none";
      });
    });
  });
  

  // Select the projects container and navigation arrows
const projectsContainer = document.querySelector(".projects-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Track the current scroll position
let currentScrollPosition = 0;

// Scroll width of one project item (adjust as needed)
const scrollAmount = 300 ; // Matches `min-width` in CSS

// Handle left arrow click
leftArrow.addEventListener("click", () => {
  currentScrollPosition = Math.max(currentScrollPosition - scrollAmount, 0);
  projectsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;
});

// Handle right arrow click
rightArrow.addEventListener("click", () => {
  const maxScroll = projectsContainer.scrollWidth - projectsContainer.parentElement.offsetWidth;
  currentScrollPosition = Math.min(currentScrollPosition + scrollAmount, maxScroll);
  projectsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;
});

// validation for contact form
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("All fields are required!");
    e.preventDefault();
  }
});
