import React from "react";

export default function UserForm({ formData, handleChange, handleAddContact }) {
  return (
    <div>
      <form onSubmit={handleAddContact}>
        <label>Contact name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Contact phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>Contact email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
