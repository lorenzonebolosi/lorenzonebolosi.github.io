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

// Function to change background image with smooth left-to-right transition
function changeBackgroundImage() {
  // Apply the left-to-right sliding effect by changing background-position
  document.body.style.transition = 'background-position 2s ease-in-out'; // Smooth transition for background

  // Slide the current background to the left before changing the image
  document.body.style.backgroundPosition = '100% center'; // Start the slide to the right

  // After a brief delay (e.g., 100ms), change the background image and slide it back to the left
  setTimeout(() => {
    document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    document.body.style.backgroundPosition = '0% center'; // Slide back to left
  }, 100); // Delay the background image change to let the transition start

  // Reset the transition to allow future changes without the sliding effect
  setTimeout(() => {
    document.body.style.transition = 'background-position 0s'; // Reset transition time after effect
  }, 2100); // Wait for the transition to finish (2s + some buffer)
}

// Left arrow click: show the previous image with a smooth transition
document.getElementById('left-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  changeBackgroundImage();
});

// Right arrow click: show the next image with a smooth transition
document.getElementById('right-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  changeBackgroundImage();
});

// Set the initial background
document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
document.body.style.backgroundPosition = '0% center';  // Initial position

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
