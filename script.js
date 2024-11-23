document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.querySelector(".__burger_icon");
    const extraButtons = document.querySelector(".__extra_buttons");
    const headerIcon = document.querySelector(".header-icon");

  
    burgerIcon.addEventListener("click", () => {
      burgerIcon.classList.toggle("open");
      extraButtons.classList.toggle("open");
      headerIcon.classList.toggle("open");
    });
  });