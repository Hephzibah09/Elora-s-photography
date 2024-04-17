const navBtn = document.querySelector("#toggle");
const links = document.querySelector("#nav-links");

navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });
  
// set year
date.innerHTML = new Date().getFullYear();