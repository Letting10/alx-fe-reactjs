// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e && e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setSearched(true);
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchUserData(q, 5); // limit = 5
      setUsers(results);
    } catch (err) {
      // Better error messages
      if (err?.response?.status === 403) {
        setError("GitHub rate limit reached. Try again later or set a personal token.");
      } else {
        setError("Looks like we cant find the user");
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearch} className="search-form">
        <input
          aria-label="Search GitHub users"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username or query..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && !loading && <p className="error">{error}</p>}

      {!loading && users.length > 0 && (
        <ul className="results-list">
          {users.map((user) => (
            <li key={user.id} className="result-item">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                width="64"
                height="64"
                style={{ borderRadius: 8 }}
              />
              <div className="meta">
                <p><strong>{user.name || user.login}</strong> ({user.login})</p>
                <p>{user.location || "No location provided"}</p>
                <p>Repos: {user.public_repos ?? "—"}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && searched && users.length === 0 && !error && (
        <p>Looks like we cant find the user</p>
      )}
    </div>
  );
}
