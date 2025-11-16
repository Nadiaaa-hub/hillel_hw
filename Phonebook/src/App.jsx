import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  const handleAddClick = () => {
    setSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddContact = (contact) => {
    const { key, id, name, phone, email } = contact;
    const newContact = { key, id, name, phone, email };
    setContacts([...contacts, newContact]);
    setSubmit(false);
  };

  return (
    <>
      <div className="app">
        <h1 className="title">My Contacts</h1>

        {submit && (
          <UserForm
            formData={formData}
            handleChange={handleChange}
            handleAddContact={handleAddContact}
          />
        )}

        {!submit && (
          <>
            <button className="add-btn" onClick={handleAddClick}>
              Add Contact
            </button>
            <UserList contacts={contacts} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
