const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // Toggle: menu bars open/closed
  menuBars.classList.toggle("change");
  // Toggle: menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

//Show images
function showDetails(projectId) {
  // Hide all project details
  var projectDetails = document.getElementsByClassName("project-details");
  for (var i = 0; i < projectDetails.length; i++) {
    projectDetails[i].style.display = "none";
  }

  // Show the selected project details
  var selectedProject = document.getElementById(projectId + "-details");
  selectedProject.style.display = "block";
}

//email mum-------------------------------------------------
function sendEmail() {
  var subject = "Regarding your work";
  var body =
    "Hello, \n\n I am interested in your work. Please provide more details.";

  var encodedSubject = encodeURIComponent(subject);
  var encodedBody = encodeURIComponent(body);

  var mailtoLink =
    "mailto:gyujoonyang.a@gmail.com?subject=" +
    encodedSubject +
    "&body=" +
    encodedBody;

  window.location.href = mailtoLink;
}
