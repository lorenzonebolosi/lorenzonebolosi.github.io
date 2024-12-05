// Background images array (place your filenames here)
const backgroundImages = [
  'images/backgrounds/background.jpg',
  'images/backgrounds/PHOTO-2024-07-19-18-09-02.jpg',
  'images/backgrounds/PHOTO-2024-07-09-14-30-23.jpg',
  'images/backgrounds/PHOTO-2024-06-23-14-58-59.jpg',
  'images/backgrounds/PHOTO-2023-10-31-10-09-28.jpg',
];
// Track the current background index
let currentIndex = 0;

// Set the initial background
document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

// Left arrow click: show the previous image
document.getElementById('left-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
});

// Right arrow click: show the next image
document.getElementById('right-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
});

// Toggle menu visibility when title is clicked
document.getElementById("site-title").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("shown");
  } else {
    menu.classList.remove("shown");
    menu.classList.add("hidden");
  }
});
