/**
 * Individual Project Page Loader
 * Loads and displays a single project's details and images
 */

/**
 * Get project ID from URL parameters
 */
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Load and display project
 */
async function loadProject() {
  const projectId = getProjectId();
  const container = document.getElementById('project-content');

  if (!projectId) {
    container.innerHTML = '<div class="error-message">No project specified</div>';
    return;
  }

  try {
    // Load the portfolio index
    const response = await fetch('works-index.json');
    if (!response.ok) {
      throw new Error('Failed to load portfolio data');
    }

    const projects = await response.json();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
      container.innerHTML = '<div class="error-message">Project not found</div>';
      return;
    }

    // Update page title
    document.title = project.title;

    // Render project details
    container.innerHTML = `
      <article class="project-details">
        <header class="project-header-info">
          <h1 class="project-title">${project.title}</h1>
          <div class="project-metadata">
            ${project.location ? `<p class="project-location">${project.location}</p>` : ''}
            ${project.year ? `<p class="project-year">${project.year}</p>` : ''}
            ${project.category ? `<p class="project-category">${project.category}</p>` : ''}
          </div>
        </header>

        ${project.description ? `
          <div class="project-description">
            <p>${project.description}</p>
          </div>
        ` : ''}

        <div class="project-gallery">
          ${project.images.map((img, index) => `
            <figure class="gallery-item">
              <img src="${img}" alt="${project.title} - Image ${index + 1}" loading="lazy">
            </figure>
          `).join('')}
        </div>

        ${project.photographer ? `
          <footer class="project-footer">
            <p class="photographer-credit">Photography: ${project.photographer}</p>
          </footer>
        ` : ''}
      </article>
    `;
  } catch (error) {
    console.error('Error loading project:', error);
    container.innerHTML = `
      <div class="error-message">
        <p>Failed to load project</p>
        <p><a href="work.html">Return to portfolio</a></p>
      </div>
    `;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadProject);
