/**
 * Helper function to get the correct image path for assets
 * @param {string} path - The relative path to the image in the assets folder
 * @returns {string} The correct path to the image
 */
export function getImagePath(path) {
  // For development, use relative path
  if (import.meta.env.DEV) {
    return `assets/${path}`;
  }
  
  // For production (GitHub Pages), use the full path
  const repoName = 'Culture_Design_A3_Web'; // Update this to match your repository name
  return `/${repoName}/assets/${path}`;
}