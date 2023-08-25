/* ==================== header dropdown menu ==================== */
const screenWidth = window.innerWidth;
const hamburgerMenu = document.getElementById("hamburger_menu");
const hamburgerClose = document.getElementById("hamburger_menu_close");
const dropdownMenu = document.getElementById("header_dropdown");

const openDropdown = () => {
    dropdownMenu.style.display = 'block';
    hamburgerMenu.style.display = "none"
    hamburgerClose.style.display = "block"
}
const closeDropdown = () => {
    dropdownMenu.style.display = 'none';
    hamburgerMenu.style.display = "block"
    hamburgerClose.style.display = "none"
}

hamburgerMenu.onclick = openDropdown;
hamburgerClose.onclick = closeDropdown;

if (screenWidth > 600)
    dropdownMenu.style.display = 'none';
    