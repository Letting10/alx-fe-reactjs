import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);

  async function fetchUserData(username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
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

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
        </div>
      )}
    </div>
  );
}

export default Search;
