const contactBook = {
  contacts: [
    {
      name: "Nadia",
      phone: "+380501234567",
      email: "nadia@example.com",
    },
    {
      name: "Alex",
      phone: "+380671112233",
      email: "alex@example.com",
    },
    {
      name: "Sophia",
      phone: "+380631234567",
      email: "sophia@example.com",
    },
    {
      name: "John",
      phone: "+380661234567",
      email: "john@example.com",
    },
  ],

  SearchByName(name) {
    this.contacts.forEach((contact) => {
      if (contact.name === name) {
        console.log(
          `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
        );
      }
    });
  },

  AddContact(name, phone, email) {
    this.contacts.push({ name, phone, email });
  },
};

contactBook.SearchByName("John");
contactBook.AddContact("Jessica", "+380683970953", "jessica@example.com");
console.log(contactBook.contacts);
