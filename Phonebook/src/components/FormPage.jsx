import { useNavigate } from "react-router";
import UserForm from "./UserForm";
import { useContext, useEffect } from "react";
import { LanguageContext, ThemeContext } from "./contexts/contexts";

export default function FormPage({
  formData,
  setFormData,
  contacts,
  setContacts,
}) {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, formData]);
    setFormData({ name: "", phone: "", email: "" });
    navigate("/");
  };

  const handleLanguage = () => {
    setLanguage(language === "UA" ? "EN" : "UA");
  };

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={handleLanguage}>
        {language === "UA" ? "UA" : "EN"}
      </button>
      <button onClick={handleTheme}>{theme === "dark" ? "🌙" : "☀️"}</button>
      <h1 className="title">
        {language === "UA" ? "Новий контакт" : "New contact"}
      </h1>

      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleAddContact={handleAddContact}
      />
    </div>
  );
}
