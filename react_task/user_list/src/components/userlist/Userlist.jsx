import React, { useState } from 'react';
import UserCard from '../usercard/Usercard';
import './Userlist.css';

const UsersList = ({ users }) => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleReset = () => {
    setInputValue('');
    setSearch('');
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Users List</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by email..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
        {search && (
          <button onClick={handleReset} className="reset-button">Reset</button>
        )}
      </div>

      <div className="user-cards">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersList;
