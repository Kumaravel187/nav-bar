// Selecting DOM elements
const navEl = document.querySelector(".nav-toggle");
const linkEl = document.querySelector(".links");
const btnEl = document.querySelector("#btn");

// Adding event listener for navigation toggle
navEl.addEventListener("click", () => {
  linkEl.classList.toggle("show-all");
});

// Adding event listener for the "Click Me" button
btnEl.addEventListener("click", () => {
  // Fetching random activity from the API
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      // Updating the content of the "bored" element with the fetched activity
      document.querySelector(".bored").textContent = data.activity;
    });
});
