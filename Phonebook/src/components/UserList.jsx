import UserCard from "./UserCard";

export default function UserList({ contacts }) {
  if (contacts.length === 0) {
    return <p className="loading">No contacts yet</p>;
  }

  return (
    <ul className="user-list">
      {contacts.map((contact, index) => (
        <UserCard key={index} {...contact} />
      ))}
    </ul>
  );
}
