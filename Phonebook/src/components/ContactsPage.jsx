import { useNavigate } from "react-router";
import UserList from "./UserList";

export default function ContactsPage({ contacts }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="title">My Contacts</h1>
      <button className="add-btn" onClick={() => navigate("/contacts-form")}>
        Add contact
      </button>
      <UserList contacts={contacts} />
    </div>
  );
}
