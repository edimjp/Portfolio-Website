document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("nav svg.hamburger");
  const sideBar = document.querySelector("aside.side-bar");
  const sideBarCancel = document.querySelector("nav div.cancel span");
  const sideBarOverlay = document.querySelector("div.sbc-guard");
  const light_dark_Button = document.querySelector("nav button");
  // console.log(light_dark_Button);

  const htmlTag = document.querySelector("html");
  // const bodyTag = document.querySelector("body");

  // Function to open the sidebar
  function openSideBar() {
    sideBar.style.transform = "translateX(0)"; // Slide in
    sideBarOverlay.style.display = "block";
  }

  // Function to close the sidebar
  function closeSideBar() {
    sideBar.style.transform = "translateX(-100%)"; // Slide out
    sideBarOverlay.style.display = "none";
  }

  //Dark/Light Mode
  function light_dark_mode() {
    htmlTag.classList.toggle("dark-mode");
  }

  // Event listeners
  hamburger.addEventListener("click", openSideBar);
  sideBarCancel.addEventListener("click", closeSideBar);

  sideBarCancel.addEventListener("click", closeSideBar);

  sideBarOverlay.addEventListener("click", closeSideBar);

  light_dark_Button.addEventListener("click", light_dark_mode);

  //Prevent overlay click when inside the sidebar

  // sideBar.addEventListener("click", (e) => {
  //   e.stopPropagation(); // Prevents click events from propagating to the overlay
  //   console.log("Inside the side bar");
  // });

  // Swipe gesture detection
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    console.log(e.changedTouches);
    touchStartX = e.changedTouches[0].clientX;
  });

  document.addEventListener("touchmove", (e) => {
    touchEndX = e.changedTouches[0].clientX;
  });

  document.addEventListener("touchend", () => {
    // Swipe from right to left
    if (touchStartX > window.innerWidth - 50 && touchStartX - touchEndX > 50) {
      openSideBar();
    }
    // Swipe from left to right (close sidebar)
    if (touchStartX < 50 && touchEndX - touchStartX > 50) {
      closeSideBar();
    }
  });
});
