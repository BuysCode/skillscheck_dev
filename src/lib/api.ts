/**
 * Get the base URL for API calls in server components
 * In production, use NEXTAUTH_URL environment variable
 * In development, fallback to localhost:3000
 */
export function getApiBaseUrl(): string {
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }
  
  // Fallback for development
  return 'http://localhost:3000';
}

/**
 * Get the full API URL for a given path
 * Usage: getApiUrl('/api/profile')
 */
export function getApiUrl(path: string): string {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}${path}`;
}
