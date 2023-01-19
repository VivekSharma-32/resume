var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(this.textContent);
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);
    //    interval = setInterval(scrollVertically, 20, targetSection);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 50);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

// skills animations
// var progressBars = document.querySelectorAll(".skill-progress > div");
// var skillsContainer = document.getElementById("skills-container");
// window.addEventListener("scroll", checkScroll);
// var animationDone = false;

// function initializeBars() {
//   for (let bar of progressBars) {
//     bar.style.width = 0 + "%";
//   }
// }

// initializeBars();

// function fillBars() {
//   for (let bar of progressBars) {
//     let targetWidth = bar.getAttribute("data-bar-width");
//     let currentWidth = 0;
//     let interval = setInterval(function () {
//       if (currentWidth > targetWidth) {
//         clearInterval(interval);
//         return;
//       }
//       currentWidth++;
//       bar.style.width = currentWidth + "%";
//     }, 5);
//   }
// }

// function checkScroll() {
//   var coordinates = skillsContainer.getBoundingClientRect();
//   if (!animationDone && coordinates.top < window.innerHeight) {
//     animationDone = true;
//     console.log("Skills section visible");
//     fillBars();
//   } else if (coordinates.top > window.innerHeight) {
//     animationDone = false;
//     initializeBars();
//   }
// }
var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (var bar of progressBars) {
  initialiseBar(bar);
}

function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);
