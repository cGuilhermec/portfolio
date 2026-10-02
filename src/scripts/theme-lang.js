// src/scripts/theme-lang.js

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  let savedTheme = localStorage.getItem("theme");
  let isDark = savedTheme === null ? true : savedTheme === "dark";

  const updateTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.documentElement.removeAttribute("data-theme");
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      isDark = !isDark;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateTheme();
    });
  }
  
  updateTheme(); // Init theme
});
