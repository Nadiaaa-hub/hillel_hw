export default function UserCard({ name, phone, email }) {
  return (
    <li className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-phone">{phone}</p>
      <p className="user-email">{email}</p>
    </li>
  );
}
