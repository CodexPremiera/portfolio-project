/* ==================== header dropdown menu ==================== */
const hamburgerMenu = document.getElementById("hamburger_menu");
const hamburgerClose = document.getElementById("hamburger_menu_close");
const dropdownMenu = document.getElementById("header_dropdown");

// Change based on click action
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

// Change based on window resize events
window.addEventListener('resize', () => {
    const newScreenWidth = window.innerWidth;

    if (newScreenWidth > 600)
        closeDropdown();
    if (newScreenWidth <= 600) {
        hamburgerMenu.style.display = "block"
        hamburgerClose.style.display = "none"
    }
});