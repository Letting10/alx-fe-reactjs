import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState(false);

  async function fetchUserData(username) {
    try {
      // First, search for users
      const res = await fetch(`https://api.github.com/search/users?q=${username}`);
      if (!res.ok) throw new Error("User search failed");
      const data = await res.json();

      // Fetch detailed info for each user
      const detailedUsers = await Promise.all(
        (data.items || []).map(async (user) => {
          const detailRes = await fetch(user.url); // user.url = API link to full profile
          const details = await detailRes.json();
          return details; // includes location, html_url, etc.
        })
      );

      setUsers(detailedUsers);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(true);
      fetchUserData(query);
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

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} width={50} />
              <p>{user.login}</p>
              <p>{user.location || "No location provided"}</p> {/* ✅ location */}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a> {/* ✅ html_url */}
            </li>
          ))}
        </ul>
      ) : (
        searched && <p>Looks like we cant find the user</p>
      )}
    </div>
  );
}

export default Search;
