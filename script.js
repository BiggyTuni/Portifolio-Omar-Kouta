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
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const projectsContainer = document.querySelector(".projects-container");

// Scroll width of one project item 
const scrollAmount = 360 ; 

let scrollPosition = 0;



leftArrow.addEventListener("click", () => {
  scrollPosition = Math.max(0, scrollPosition - scrollAmount);
  projectsContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

rightArrow.addEventListener("click", () => {
  const maxScroll = projectsContainer.scrollWidth - projectsContainer.offsetWidth;
  scrollPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
  projectsContainer.style.transform = `translateX(-${scrollPosition}px)`;
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