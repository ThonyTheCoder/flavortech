document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

  dropdownButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const dropdown = btn.parentElement;
      dropdown.classList.toggle("show");
    });
  });
});


