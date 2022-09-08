import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {}, [contacts]);
  return (
    <div>
      <List />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
