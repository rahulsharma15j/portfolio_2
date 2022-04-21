function toggle(value) {
  var mobileNav = document.getElementById("mobile-navbar");
  var backdrop = document.getElementById("backdrop");

  if (value === "show") {
    mobileNav.classList.add("show");
    backdrop.classList.add("show");
  }

  if (value === "hide") {
    mobileNav.classList.remove("show");
    backdrop.classList.remove("show");
  }
}
