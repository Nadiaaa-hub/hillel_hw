export default function UserForm({ formData, handleChange, handleAddContact }) {
  return (
    <form onSubmit={handleAddContact}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Phone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}
