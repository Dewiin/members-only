const userNavbarProfile = document.querySelector(".user-navbar-profile");
const userNavbarDropdown = document.querySelector(".user-navbar-profile > ul");

userNavbarProfile.addEventListener("click", () => {
	userNavbarDropdown.classList.toggle("active");
});
