import React, { useState } from "react";

const BASE = "https://api.github.com";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  async function fetchUserData(username) {
    setLoading(true);
    setUsers([]);

    const headers = token ? { Authorization: `token ${token}` } : {};

    try {
      // Try exact match first
      let res = await fetch(`${BASE}/users/${username}`, { headers });
      if (res.ok) {
        let details = await res.json();
        setUsers([details]);
        setLoading(false);
        return;
      }

      // Fallback to search API
      res = await fetch(`${BASE}/search/users?q=${username}`, { headers });
      const data = await res.json();

      const detailedUsers = await Promise.all(
        (data.items || []).map(async (user) => {
          const detailRes = await fetch(user.url, { headers });
          return await detailRes.json();
        })
      );

      setUsers(detailedUsers);
    } catch (error) {
      console.error(error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(true);
      fetchUserData(query.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} width={50} />
              <p>{user.login}</p>
              <p>{user.location || "No location provided"}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        searched && !loading && <p>Looks like we cant find the user</p>
      )}
    </div>
  );
}
