import { useNavigate } from "react-router";
import UserList from "./UserList";
import { LanguageContext, ThemeContext } from "./contexts/contexts";
import { useContext, useEffect } from "react";

export default function ContactsPage({ contacts }) {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

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
        {language === "UA" ? "Мої контакти" : "My Contacts"}
      </h1>
      <button className="add-btn" onClick={() => navigate("/contacts-form")}>
        {language === "UA" ? "Додати контакт" : "Add contact"}
      </button>
      <UserList contacts={contacts} />
    </div>
  );
}
