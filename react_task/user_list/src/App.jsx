import React from 'react';
import UsersList from './components/userlist/Userlist';
import { UsersData } from './components/utils/data'; 
function App() {
  return (
    <div className="App">
      <h1 className="app-title">Users List</h1>
      <UsersList users={UsersData} />
    </div>
  );
}

export default App;
