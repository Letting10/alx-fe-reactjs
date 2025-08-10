// src/services/githubService.js
import axios from "axios";

const BASE = "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
const HEADERS = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

/**
 * Fetch detailed user profiles from GitHub Search API.
 * Returns an array of detailed user objects (includes location, html_url, etc.)
 * limit: number of profiles to fetch details for (default 5)
 */
export async function fetchUserData(query, limit = 5) {
  if (!query || !query.trim()) return [];

  // Search users
  const searchRes = await axios.get(`${BASE}/search/users`, {
    params: { q: query, per_page: limit },
    headers: HEADERS,
  });

  const items = (searchRes.data && searchRes.data.items) || [];
  if (items.length === 0) return [];

  // Fetch each user's full profile (user.url is the API endpoint)
  const detailsPromises = items.slice(0, limit).map((u) =>
    axios.get(u.url, { headers: HEADERS }).then((r) => r.data)
  );

  const detailed = await Promise.all(detailsPromises);
  return detailed;
}
