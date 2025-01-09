

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


document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const projectsContainer = document.querySelector(".projects-container");
  const projectItems = Array.from(projectsContainer.children);

  // Dynamically calculate project width including gap
  const projectWidth = projectItems[0].offsetWidth + 35; // Includes gap
  const totalProjects = projectItems.length;
  let currentIndex = 0; // Tracks the current project

  const updateProjectPosition = () => {
    const containerWidth = projectsContainer.offsetWidth; // Total visible width
    const center_offset = (containerWidth - projectWidth) / 2; // Centering offset
    const scrollPosition = currentIndex * projectWidth; // Position of the selected project
    const translateX = center_offset - scrollPosition; // Calculate TranslateX

    // Log debugging information
    console.log("Current Index:", currentIndex);
    console.log("TranslateX:", translateX);
    console.log("Project Width:", projectWidth);

    projectsContainer.style.transition = "transform 0.5s ease";
    projectsContainer.style.transform = `translateX(${translateX}px)`;
  };

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalProjects; // Loop back to start
    updateProjectPosition();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalProjects) % totalProjects; // Loop to end
    updateProjectPosition();
  });

  // Handle resizing dynamically
  window.addEventListener("resize", () => {
    projectsContainer.style.transition = "none";
    updateProjectPosition();
  });

  // Center the first project on load
  updateProjectPosition();
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

