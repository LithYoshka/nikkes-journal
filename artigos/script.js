window.addEventListener("scroll", function() {
    var display2 = document.querySelector(".display2");
    var headerHeight = document.querySelector("header").offsetHeight;
  
    if (window.pageYOffset > headerHeight) {
      display2.classList.add("fixed-top");
    } else {
      display2.classList.remove("fixed-top");
    }
  });

document.addEventListener('DOMContentLoaded', () => {
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
    window.localStorage.setItem("theme", "dark");
    } else {
    window.localStorage.setItem("theme", "light");
    }
});
});
  
  