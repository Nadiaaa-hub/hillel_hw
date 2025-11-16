export default function UserList({ contacts }) {
  if (contacts.length === 0) {
    return <p className="loading">No contacts yet</p>;
  }

  return (
    <ul className="user-list">
      {contacts.map((user) => (
        <li key={user.id} className="user-card">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-phone">{user.phone}</p>
          <p className="user-email">{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
