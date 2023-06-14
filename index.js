const dropdownBtns = document.querySelectorAll(".dropdown");
const openMenu = document.querySelector('.btn-menu');
const closeMenu = document.querySelector('.btn-close');
const mobileMenu = document.querySelector('.nav-links')
const overlay = document.querySelector('.menu-overlay')

dropdownBtns.forEach((dropdownBtn) => {
  const arrowIcon = dropdownBtn.querySelector(".arrow-icon");

  dropdownBtn.addEventListener("click", function() {

    const dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      arrowIcon.src = "./images/icon-arrow-up.svg";
    } else {
      dropdownContent.style.display = "flex";
      arrowIcon.src = "./images/icon-arrow-down.svg";
    }
  });
});

openMenu.addEventListener('click', function() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
});

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
});