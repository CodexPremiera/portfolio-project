/* ==================== header dropdown menu ==================== */
let hamburgerMenu = document.getElementById("hamburger_menu");
let hamburgerClose = document.getElementById("hamburger_menu_close");
let dropdownMenu = document.getElementById("header_dropdown");

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