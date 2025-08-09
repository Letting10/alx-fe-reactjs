import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState(false); 

  async function fetchUserData(username) {
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUsers(data.items || []);
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
