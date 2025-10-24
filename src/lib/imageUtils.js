/**
 * Helper function to get the correct image path for assets
 * @param {string} path - The relative path to the image in the assets folder
 * @returns {string} The correct path to the image
 */
export function getImagePath(path) {
  const base = import.meta.env.BASE_URL || '/';
  // Always use relative paths for assets
  return `${base}assets/${path}`.replace(/\/+/g, '/');
}