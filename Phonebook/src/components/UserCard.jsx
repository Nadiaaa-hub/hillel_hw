import { useContext } from "react";
import { ThemeContext } from "./contexts/contexts";

export default function UserCard({ name, phone, email }) {
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`user-card ${theme}`}>
      <h2 className="user-name">{name}</h2>
      <p className="user-phone">{phone}</p>
      <p className="user-email">{email}</p>
    </li>
  );
}
