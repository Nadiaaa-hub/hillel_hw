import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./contexts/contexts";

export default function Menu() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <nav className={`menu ${theme}`}>
      <Link to="/">{language === "UA" ? "Меню" : "Menu"}</Link>
      <Link to="/contacts-form">
        {language === "UA" ? "Меню контактів" : "Contacts Page"}
      </Link>
    </nav>
  );
}
