import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Item() {
    const [users, setUsers] = useState([]);

  useEffect(async () => {
    const users = await axios.get(
      "https://randomuser.me/api/?page=1&results=10&nat=us"
    );
    setUsers(users.data.results);
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {users.map(user => (
          <h1>user</h1>
        ))}
      </div>
    </div>
  );
}

 
export default Item;