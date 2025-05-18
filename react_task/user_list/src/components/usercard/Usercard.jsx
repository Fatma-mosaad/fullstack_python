import React from 'react';
import './Usercard.css';

const roleColor = {
  admin: '#ff4d4d',
  user: '#4CAF50',
  moderator: '#FFD700',
};

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={user.username}
        className="user-avatar"
      />
      <div
        className="user-role"
        style={{ backgroundColor: roleColor[user.role] }}
      >
        {user.role}
      </div>
      <p className="username"><strong>{user.username}</strong></p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.birthdate}</p>
    </div>
  );
};


export default UserCard;
