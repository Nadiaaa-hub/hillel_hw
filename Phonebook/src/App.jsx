import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import FormPage from "./components/FormPage";
import ContactsPage from "./components/ContactsPage";
import { LanguageContext, ThemeContext } from "./components/contexts/contexts";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [language, setLanguage] = useState("UA");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setContacts(result);
    };

    loadData();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <BrowserRouter>
            <Menu />

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
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
