import React, { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

const AppointmentsPage = ({ appointments, contacts, addAppointment, errorMsg, setErrorMsg }) => {
  
  /*
  Define state variables for 
  appointment info
  */

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          addAppointment={addAppointment}
          appointments={appointments}
          contacts={contacts}
          setErrorMsg={setErrorMsg}
        />
        <p>{errorMsg}</p>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          array={appointments}
        />
      </section>
    </div>
  );
};

export default AppointmentsPage;