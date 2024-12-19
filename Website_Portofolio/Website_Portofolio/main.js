// Toggle & Responsive Navigation
function navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
  // Toggle nav list and burger class
  navLists.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
 });
};

navSlide();

//Clear Form before uplod
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};