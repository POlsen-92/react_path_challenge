import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <Router>
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={nav => nav.isActive ? "active" : ""}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className={nav => nav.isActive ? "active" : ""}>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />}/>
             {/* Add props to ContactsPage */}
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />}/>
            {/* Add props to AppointmentsPage */}
          <Route path="/" element={<Navigate replace to={ROUTES.CONTACTS} />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
