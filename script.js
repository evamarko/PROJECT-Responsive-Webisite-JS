//Responsive menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[2] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

//Enlarging images
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

function enlargeImage(image) {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
}

enlargeImage(image1);
enlargeImage(image2);
enlargeImage(image3);

//Form - passwords validation
document
  .getElementById("registrationForm")
  .addEventListener("input", function () {
    validateForm();
  });

function validateForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorElement = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    errorElement.textContent = "Password do not match";
    errorElement.classList.add("error");
    errorElement.classList.remove("success");
  } else {
    errorElement.textContent = "Password match";
    errorElement.classList.add("success");
    errorElement.classList.remove("error");
  }

  if (password === "" || confirmPassword === "") {
    errorElement.textContent = "";
    errorElement.classList.remove("success");
    errorElement.classList.remove("error");
  }
}

//Scrolling and arrow up
const arrowUp = document.querySelector(".arrow-icon");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    arrowUp.style.display = "block";
  }
});

arrowUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Dark and ligh mode
const modeIcon = document.querySelector(".mode-icon");
const moonIcon = document.querySelector(".mode");
const body = document.querySelector("body");
const vipsection = document.querySelector(".vipsection");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h2vipsection = document.querySelector(".vipsection h2");
const formContainer = document.querySelector(".form-container");

modeIcon.addEventListener("click", () => {
  if (moonIcon.classList[2] === "fa-moon") {
    moonIcon.classList.add("fa-sun");
    moonIcon.classList.remove("fa-moon");
    body.style.backgroundColor = "#282425";
    body.style.color = "#fff1e6";
    vipsection.style.backgroundColor = "#474747";
    h2.style.color = "#fff1e6";
    h2vipsection.style.color = "#fff1e6";
    h3.style.color = "#fff1e6";
    formContainer.style.backgroundColor = "#282425";
  } else {
    moonIcon.classList.add("fa-moon");
    moonIcon.classList.remove("fa-sun");
    body.style.backgroundColor = "#fff1e6";
    body.style.color = "#282425";
    vipsection.style.backgroundColor = "#f9e3d0";
    h2.style.color = "#756158";
    h2vipsection.style.color = "#756158";
    h3.style.color = "#756158";
    formContainer.style.backgroundColor = "#fff";
  }
});
