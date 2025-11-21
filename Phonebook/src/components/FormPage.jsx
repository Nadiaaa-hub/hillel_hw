import { useNavigate } from "react-router";
import UserForm from "./UserForm";

export default function FormPage({
  formData,
  setFormData,
  contacts,
  setContacts,
}) {
  const navigate = useNavigate();

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

  return (
    <UserForm
      formData={formData}
      handleChange={handleChange}
      handleAddContact={handleAddContact}
    />
  );
}
