/**
 * Home Page Script
 * Loads a random background image and navigates to work page on click
 */

// Background images array
const backgroundImages = [
  'images/backgrounds/background.jpg',
  'images/backgrounds/PHOTO-2024-07-19-18-09-02.jpg',
  'images/backgrounds/PHOTO-2024-07-09-14-30-23.jpg',
  'images/backgrounds/PHOTO-2024-06-23-14-58-59.jpg',
  'images/backgrounds/PHOTO-2023-10-31-10-09-28.jpg',
];

/**
 * Select a random background image
 */
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}

/**
 * Initialize home page
 */
function initHomePage() {
  // Only run on home page
  const homeContainer = document.getElementById('home-container');
  if (!homeContainer) return;

  // Set random background image
  const randomImage = getRandomImage();
  document.body.style.backgroundImage = `url('${randomImage}')`;

  // Make entire page clickable to navigate to work page
  homeContainer.addEventListener('click', () => {
    window.location.href = 'work.html';
  });

  // Add hover effect
  homeContainer.style.cursor = 'pointer';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initHomePage);
