/**
 * Helper function to get the correct image path for assets
 * @param {string} path - The relative path to the image in the assets folder
 * @returns {string} The correct path to the image
 */
export function getImagePath(path) {
  // In development, use relative path
  if (import.meta.env.DEV) {
    return `./assets/${path}`;
  }
  
  // In production (GitHub Pages), use the full path with BASE_URL
  const base = import.meta.env.BASE_URL || '/';
  // Remove any double slashes and ensure proper format
  return `${base.replace(/\/+$/, '')}/assets/${path}`.replace(/\/+/g, '/');
}