/*
const hamburger = document.querySelector('nav img')


function handleClick (){
    const sideBar = document.querySelector('nav .side-bar')
    
    sideBar.removeAttribute('hidden')

}

hamburger.addEventListener("click", handleClick)

function removeSideBar(){
    const cancelSideBar = document.querySelector('nav .side-bar')

    cancelSideBar.setAttribute('hidden', '')
}


const sideBarCancel = document.querySelector('nav .cancel span')

sideBarCancel.addEventListener("click", removeSideBar)

*/

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("nav img.hamburger");
    const sideBar = document.querySelector("nav .side-bar");
    const sideBarCancel = document.querySelector("nav .cancel span");
  
    // Function to open the sidebar
    function openSideBar() {
      sideBar.style.transform = "translateX(0)"; // Slide in
    }
  
    // Function to close the sidebar
    function closeSideBar() {
      sideBar.style.transform = "translateX(100%)"; // Slide out
    }
  
    // Event listeners
    hamburger.addEventListener("click", openSideBar);
    sideBarCancel.addEventListener("click", closeSideBar);
  
    // Swipe gesture detection
    let touchStartX = 0;
    let touchEndX = 0;
  
    document.addEventListener("touchstart", (e) => {
      console.log(e.changedTouches)
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
  