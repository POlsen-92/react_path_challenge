import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";


const ContactsPage = ({ contacts, addContact, errorMsg, setErrorMsg }) => {

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          addContact={addContact}
          contacts={contacts}
          setErrorMsg={setErrorMsg}
        />
        <p>{errorMsg}</p>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          array={contacts}
        />
      </section>
    </div>
  );
};

export default ContactsPage;
