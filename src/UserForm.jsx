import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from "./services/api";

function UserForm({ currentUser, onSave }) {
  const [user, setuser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (currentUser) {
      setuser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user._id) {
      await updateUser(user._id, user);
    } else {
      await createUser(user);
    }
    onSave();
    setuser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
export default UserForm;
