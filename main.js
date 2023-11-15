const btnContact = document.querySelectorAll("#btnContact");
const btnProjects = document.querySelectorAll("#btnProjects");
const btnAboutMe = document.querySelectorAll("#btnAboutMe");
const btnFunctions = document.querySelector("#btnFunctions");
const burgerMenu = document.querySelector("#burger-menu");
const navDefault = document.querySelector("#navigation");
const navMobile = document.querySelector("#nav-mobile");
const body = document.querySelector("body");
const mobileNavLinks = document.querySelector("#mobile-nav-links");

const contactSection = document.getElementById("contact");
const projectsSection = document.getElementById("projects");
const aboutMeSection = document.getElementById("aboutMe");
const functionsSection = document.querySelector("#functions");

const navigationChange = () => {
  body.classList.remove("mobile-change-scroll");
  navMobile.classList.remove("mobile-change-height");
  mobileNavLinks.classList.add("nav-links-display");
};

burgerMenu.addEventListener("click", () => {
  navMobile.classList.toggle("mobile-change-height");
  mobileNavLinks.classList.toggle("nav-links-display");
  body.classList.toggle("mobile-change-scroll");
});

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;
  scrollChange = 1;
  if (scrollPosition >= scrollChange) {
    navDefault.classList.add("nav-on-scroll");
  } else {
    navDefault.classList.remove("nav-on-scroll");
  }
});

btnContact.forEach((contact) =>
  contact.addEventListener("click", () => {
    navigationChange();
    contactSection.scrollIntoView({ behavior: "smooth" });
  })
);

btnProjects.forEach((project) =>
  project.addEventListener("click", () => {
    navigationChange();
    projectsSection.scrollIntoView({ behavior: "smooth" });
  })
);

btnAboutMe.forEach((aboutMe) => {
  aboutMe.addEventListener("click", () => {
    navigationChange();
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  });
});

btnFunctions.addEventListener("click", () => {
  functionsSection.scrollIntoView({ behavior: "smooth" });
});
