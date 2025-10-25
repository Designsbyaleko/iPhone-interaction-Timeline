export const asset = (p) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present
  const cleanPath = p.startsWith('/') ? p.slice(1) : p;
  // Combine base and path, ensuring single slash
  return `${base}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
};
