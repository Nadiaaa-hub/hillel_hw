import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./contexts/contexts";

export default function UserForm({ formData, handleChange, handleAddContact }) {
  const { language } = useContext(LanguageContext);

  return (
    <form onSubmit={handleAddContact} className="form-container">
      <label>{language === "UA" ? "Ім'я" : "Name"}</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>{language === "UA" ? "Телефон" : "Phone"}</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>{language === "UA" ? "Емейл" : "Email"}</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">
        {language === "UA" ? "Додати контакт" : "Add Contact"}
      </button>
    </form>
  );
}
