window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".header__toggle");
  const menu = document.querySelector(".header__menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

const button = document.querySelector("#submit");
button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (email !== "" && name !== "") {
    swal("Terima Kasih", "Email anda sudah terkirim", "success");
  } else {
    swal({
      title: "Maaf Isi Semua Form !",
      text: "Jangan lupa untuk mengisi nama anda dan juga email anda",
      icon: "warning",
      dangerMode: true,
    });
  }
});

// ANIMATE ON SCROLL
AOS.init();

// TYPED JS
var typed = new Typed(".banner__automated", {
  strings: [
    "Front End Web Developer.",
    "Web Developer.",
    "Web Enthusiast.",
    "React Developer.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".about__automated", {
  strings: [
    "Front End Web Developer.",
    "Web Developer.",
    "Web Enthusiast.",
    "React Developer.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
