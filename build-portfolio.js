#!/usr/bin/env node

/**
 * Portfolio Builder Script
 * Scans the /works/ folder and generates a JSON index of all projects
 * Run this script whenever you add new projects or update existing ones
 */

const fs = require('fs');
const path = require('path');

const WORKS_DIR = path.join(__dirname, 'works');
const OUTPUT_FILE = path.join(__dirname, 'works-index.json');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

/**
 * Check if a file is an image
 */
function isImage(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Scan a project folder and extract project data
 */
function scanProject(projectName) {
  const projectPath = path.join(WORKS_DIR, projectName);

  // Skip if not a directory or starts with . or is README
  if (!fs.statSync(projectPath).isDirectory() || projectName.startsWith('.') || projectName === 'README.md') {
    return null;
  }

  // Read info.json
  const infoPath = path.join(projectPath, 'info.json');
  if (!fs.existsSync(infoPath)) {
    console.warn(`⚠️  Skipping ${projectName}: missing info.json`);
    return null;
  }

  let info;
  try {
    info = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
  } catch (error) {
    console.error(`❌ Error reading info.json for ${projectName}:`, error.message);
    return null;
  }

  // Get all images in the project folder
  const files = fs.readdirSync(projectPath);
  const images = files
    .filter(isImage)
    .sort() // Alphabetical order
    .map(img => `works/${projectName}/${img}`);

  if (images.length === 0) {
    console.warn(`⚠️  Warning: ${projectName} has no images`);
  }

  return {
    id: projectName,
    ...info,
    images,
    thumbnail: images[0] || null, // First image is the thumbnail
  };
}

/**
 * Main function
 */
function buildPortfolio() {
  console.log('🔍 Scanning works folder...\n');

  if (!fs.existsSync(WORKS_DIR)) {
    console.error('❌ Error: works/ folder not found');
    process.exit(1);
  }

  const items = fs.readdirSync(WORKS_DIR);
  const projects = items
    .map(scanProject)
    .filter(project => project !== null)
    .sort((a, b) => {
      // Sort by year (descending), then by title
      const yearDiff = (b.year || 0) - (a.year || 0);
      if (yearDiff !== 0) return yearDiff;
      return (a.title || '').localeCompare(b.title || '');
    });

  console.log(`✅ Found ${projects.length} project(s):\n`);
  projects.forEach(p => {
    console.log(`   📁 ${p.title} (${p.year || 'no year'}) - ${p.images.length} image(s)`);
  });

  // Write output
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
  console.log(`\n💾 Generated: ${OUTPUT_FILE}`);
  console.log('✨ Portfolio index updated successfully!\n');
}

// Run the script
buildPortfolio();
