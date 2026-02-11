# Portfolio Website for Arch. Elia Villani

A minimalist portfolio website with automatic project generation, inspired by contemporary architectural portfolio design.

## Features

- **Automatic Portfolio Generation**: Scan a folder structure and automatically generate portfolio pages
- **Minimalist Design**: Clean, image-focused layout inspired by architectural portfolios
- **Responsive Grid Layout**: Professional project showcase with filtering
- **Dynamic Project Pages**: Individual pages automatically generated for each project
- **Easy Content Management**: Just add folders with images and JSON files

## Quick Start

### Adding a New Project

1. **Create a project folder** in the `/works/` directory:
   ```
   works/villa-moderna-2025/
   ```

2. **Add project information** as `info.json`:
   ```json
   {
     "title": "Villa Moderna",
     "location": "Florence, Italy",
     "year": "2025",
     "category": "Architecture",
     "description": "A contemporary residential project showcasing modern design principles.",
     "photographer": "Your Name (optional)"
   }
   ```

3. **Add images** to the project folder:
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Use descriptive names: `exterior-view.jpg`, `interior-living.jpg`
   - Images appear in alphabetical order
   - First image becomes the thumbnail

4. **Build the portfolio**:
   ```bash
   npm run build
   ```
   Or:
   ```bash
   node build-portfolio.js
   ```

5. **Commit and push** to GitHub to deploy:
   ```bash
   git add .
   git commit -m "Add new project"
   git push
   ```

## Development

### Local Preview

Start a local server to preview your changes:
```bash
npm run dev
```
Then open http://localhost:8000 in your browser.

### Project Structure

```
lorenzonebolosi.github.io/
├── index.html              # Landing page
├── work.html               # Portfolio grid page
├── project.html            # Individual project page template
├── style.css               # All styles
├── script.js               # Landing page carousel
├── portfolio.js            # Portfolio grid logic
├── project.js              # Project page loader
├── build-portfolio.js      # Folder scanning script
├── works-index.json        # Generated portfolio index (auto-created)
└── works/                  # Your projects folder
    ├── README.md           # Instructions
    └── project-name/       # Individual project
        ├── info.json       # Project details
        ├── image1.jpg      # Project images
        └── image2.jpg
```

### Categories

The site supports filtering by category. Available categories:
- **Architecture**: Residential and institutional projects
- **Interior**: Interior design projects

Set the category in your project's `info.json` file.

## Design Philosophy

The design follows minimalist principles common in architectural portfolios:
- Clean, neutral color palette
- Image-focused presentation
- Minimal text hierarchy
- Responsive grid layout
- Professional typography

## Technology Stack

- **Pure HTML/CSS/JavaScript**: No frameworks, fast and lightweight
- **GitHub Pages**: Automatic deployment
- **Node.js**: Build script only (not required for site runtime)

## Deployment

The site auto-deploys to GitHub Pages when you push to the `main` branch. Make sure to:
1. Run `npm run build` after adding/updating projects
2. Commit the generated `works-index.json` file
3. Push to GitHub

## Customization

### Colors

Edit the color scheme in `style.css`:
- Primary dark: `#32373c`
- Text gray: `#666`
- Border: `#e0e0e0`

### Grid Layout

Adjust grid columns in `style.css` (line ~187):
```css
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
```

### Adding More Filter Categories

1. Add a new button in `work.html`:
   ```html
   <button class="filter-btn" data-filter="YourCategory">Your Category</button>
   ```

2. Set the category in your project's `info.json`:
   ```json
   "category": "YourCategory"
   ```

## Tips for Your Friend

1. **Image Quality**: Use high-quality, professionally shot images for best results
2. **Consistent Naming**: Use lowercase and hyphens for project folder names
3. **Regular Builds**: Always run `npm run build` after adding/changing projects
4. **Backup**: Keep original high-res images elsewhere; optimize for web before adding

## License

MIT
