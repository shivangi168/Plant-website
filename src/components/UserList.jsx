// UserList.js
import React from 'react';
import { users } from './sampleData';

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.profilePicture} alt={user.name} width={50} height={50} />
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
