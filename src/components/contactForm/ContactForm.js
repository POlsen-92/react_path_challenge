import React, { useState } from "react";

const ContactForm = ({ addContact, contacts, setErrorMsg }) => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  })

  const resetContactForm = () => {
    setContactInfo({ 
      name: "", 
      phoneNumber: "", 
      email: ""
    })
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactInfo({
      ...contactInfo, 
      [name]: value
    })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const contactCheck = contacts.some(contact => (contact.name === contactInfo.name))

    if (contacts.length === 0) {
      addContact(contactInfo)
      resetContactForm()
    } else if (!contactCheck) {
      addContact(contactInfo)
      resetContactForm();
    } else {
      setErrorMsg("Contact Already Exists!")
    }
  }

  return (
    <form onSubmit={handleContactSubmit}>
      <label className="mx-2">Name
      <br /><input
          className="" 
          value={contactInfo.name}
          name="name"
          onChange={handleContactChange}
          />
      </label> <br />
      <label className="mx-2">Phone Number
      <br /><input
          className="" 
          value={contactInfo.phoneNumber}
          name="phoneNumber"
          onChange={handleContactChange}
          />
      </label> <br />
      <label className="mx-2">E-Mail
      <br /><input
          className="" 
          value={contactInfo.email}
          name="email"
          onChange={handleContactChange}
          />
      </label> <br />
      <button type="submit" className="" >Submit</button>
  </form>
  );
};


export default ContactForm;