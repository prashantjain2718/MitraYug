document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const lightModeBtn = document.getElementById("light-mode");
    const darkModeBtn = document.getElementById("dark-mode");

    // Show/hide dropdown menu
    settingsBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Apply stored theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Light Mode
    lightModeBtn.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    });

    // Dark Mode
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    });
});
