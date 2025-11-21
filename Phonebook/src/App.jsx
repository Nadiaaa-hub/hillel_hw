import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import FormPage from "./components/FormPage";
import ContactsPage from "./components/ContactsPage";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

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

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<ContactsPage contacts={contacts} />} />
          <Route
            path="/contacts-form"
            element={
              <FormPage
                formData={formData}
                setFormData={setFormData}
                contacts={contacts}
                setContacts={setContacts}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
