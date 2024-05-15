"use strict mode";
var tab_links = document.getElementsByClassName("tab-links");
var tab_Conts = document.getElementsByClassName("tab-content");
var menu = document.querySelector(".nav-item");
function openmenu() {
  menu.style.right = "0px";
}
function closemenu() {
  menu.style.right = "-250px";
}
function opentab(tab) {
  for (tab_link of tab_links) {
    tab_link.classList.remove("active-link");
  }
  for (tab_Cont of tab_Conts) {
    tab_Cont.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcueYzc5o90O0yMAD8gCWSnHuYqQkegwDL3cfWXLLI8tU3z73HLecIboguodnujiXr/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

let project = document.querySelectorAll(".project");
window.addEventListener("scroll", (e) => {
  let scroll = this.scrollY;
  console.log(scroll);
  var tar = 450;
  for (var i = 0; i < project.length; i++) {
    if (scroll > tar) {
      project[i].classList.add("Services-list-motion-true");
      project[i].classList.remove("Services-list-motion-false");
      tar += 200;
    } else {
      project[i].classList.remove("Services-list-motion-true");
      project[i].classList.add("Services-list-motion-false");
    }
  }
});
