//Responsive menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
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
