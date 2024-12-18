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
  