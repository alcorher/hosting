function toggleMenu() {
  const navLinks = document.getElementById("navLinks")
  navLinks.classList.toggle("active")

/*   // Prevent scrolling when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  } */
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const navLinks = document.getElementById("navLinks")
  const menuToggle = document.querySelector(".menu-toggle")

  if (navLinks.classList.contains("active") && !navLinks.contains(event.target) && event.target !== menuToggle) {
    toggleMenu()
  }
})

/* // Close menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks")
    if (navLinks.classList.contains("active")) {
      toggleMenu()
    }
  })
}) */
