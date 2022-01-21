import React, { useState } from "react";

const AppointmentForm = ({ appointments, contacts, addAppointment, setErrorMsg }) => {

  const [appointmentInfo, setAppointmentInfo] = useState({
    title: "",
    contact: {},
    date: "",
    time: ""
  })

  const resetApptForm = () => {
    setAppointmentInfo({ 
      name: "", 
      phoneNumber: "", 
      email: ""
    })
  }

  console.log(appointmentInfo)

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target
    setAppointmentInfo({
      ...appointmentInfo, 
      [name]: value
    })
  }

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    try{
      addAppointment(appointmentInfo)
      resetApptForm()
    } catch {
      setErrorMsg("Something Went Wrong!")
    }
  };

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleAppointmentSubmit}>
      <label className="mx-2">Title
      <br /><input
          className=""
          type="text" 
          name="title"
          value={appointmentInfo.title}
          onChange={handleAppointmentChange}
          />
      </label> <br />
      <label className="mx-2">Contact
      <br /><select
          className=""
          name="contact"
          onChange={handleAppointmentChange}
          >
            <option value="" disabled selected>Choose a Contact</option>
            {contacts.map(contact => {
            return <option>{contact.name}</option>
          })}
          </select>
      </label> <br />
      <label className="mx-2">Date
      <br /><input
          className=""
          type="text"
          name="date"
          value={getTodayString()}
          onChange={handleAppointmentChange}
          />
      </label> <br />
      <label className="mx-2">Time
      <br /><input
          className=""
          type="text" 
          name="time"
          value={appointmentInfo.time}
          onChange={handleAppointmentChange}
          />
      </label> <br />
      <button type="submit" className="" >Submit</button>
  </form>
  );
};

export default AppointmentForm;
