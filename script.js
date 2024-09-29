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
