# Works Folder Structure

This folder contains all portfolio projects. Each project should be in its own subfolder.

## How to Add a New Project

1. Create a new folder with your project name (use lowercase and dashes):
   ```
   works/my-project-name/
   ```

2. Add an `info.json` file with project details:
   ```json
   {
     "title": "Project Name",
     "location": "City, Country",
     "year": "2024",
     "category": "Architecture",
     "description": "Project description here",
     "photographer": "Photographer Name (optional)"
   }
   ```

3. Add images to the project folder:
   - Use descriptive names (e.g., `exterior-view.jpg`, `interior-living.jpg`)
   - Supported formats: .jpg, .jpeg, .png, .webp
   - Images will appear in alphabetical order

4. Run the build script to update the portfolio:
   ```bash
   node build-portfolio.js
   ```

The website will automatically generate the portfolio grid and project pages!
