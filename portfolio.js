/**
 * Portfolio Grid Dynamic Loader
 * Loads projects from works-index.json and displays them in a grid
 */

let allProjects = [];
let currentFilter = 'all';

/**
 * Load projects from JSON file
 */
async function loadProjects() {
  try {
    const response = await fetch('works-index.json');
    if (!response.ok) {
      throw new Error('Failed to load portfolio data');
    }
    allProjects = await response.json();
    renderProjects();
  } catch (error) {
    console.error('Error loading projects:', error);
    document.getElementById('portfolio-grid').innerHTML = `
      <div class="error-message">
        <p>No projects found. Add projects to the /works/ folder and run:</p>
        <code>node build-portfolio.js</code>
      </div>
    `;
  }
}

/**
 * Render projects to the grid
 */
function renderProjects() {
  const grid = document.getElementById('portfolio-grid');

  // Filter projects
  const filteredProjects = currentFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === currentFilter);

  if (filteredProjects.length === 0) {
    grid.innerHTML = '<div class="no-projects">No projects in this category yet.</div>';
    return;
  }

  // Generate HTML for each project
  grid.innerHTML = filteredProjects.map(project => `
    <article class="project-card" data-category="${project.category || 'uncategorized'}">
      <a href="project.html?id=${project.id}" class="project-link">
        <div class="project-image">
          ${project.thumbnail ? `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy">` : '<div class="no-image">No image</div>'}
        </div>
        <div class="project-info">
          <h2 class="project-title">${project.title}</h2>
          <p class="project-meta">${project.location || ''} ${project.year ? `• ${project.year}` : ''}</p>
        </div>
      </a>
    </article>
  `).join('');
}

/**
 * Setup filter buttons
 */
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update filter and re-render
      currentFilter = button.dataset.filter;
      renderProjects();
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  setupFilters();
});
