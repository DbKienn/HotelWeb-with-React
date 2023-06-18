import React from "react";
import "../fomatGeneral.css";
import "./Navbar.css";
// ----------- DATA -----------------
const dataOption = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

function Navbar() {
  return (
    // ----------NAVBAR ---------------
    <div className="nav-container">
      <div className="nav-title-login">
        <div>
          {/* ---------TITLE----- */}
          <h2>Booking Website</h2>
        </div>
        {/* ------ BUTTON REGISTER & LOGIN NAVBAR---------- */}
        <div>
          <button className="nav-btn nav-btn-register">Register</button>
          <button className="nav-btn nav-btn-login">Login</button>
        </div>
      </div>
      {/* ---------- IMPORT DATA FROM DATAOPTION---------- */}
      <div className="nav-options-all">
        <section
          className={`nav-option ${
            dataOption[0].active == true && "nav-border-option"
          }`}
        >
          <i class={`fa ${dataOption[0].icon}`}></i> {dataOption[0].type}
        </section>
        <section
          className={`nav-option ${
            dataOption[1].active == true && "nav-border-option"
          }`}
        >
          <i class={`fa ${dataOption[1].icon}`}></i> {dataOption[1].type}
        </section>
        <section
          className={`nav-option ${
            dataOption[2].active == true && "nav-border-option"
          }`}
        >
          <i class={`fa ${dataOption[2].icon}`}></i> {dataOption[2].type}
        </section>
        <section
          className={`nav-option ${
            dataOption[3].active == true && "nav-border-option"
          }`}
        >
          <i class={`fa ${dataOption[3].icon}`}></i> {dataOption[3].type}
        </section>
        <section
          className={`nav-option ${
            dataOption[4].active == true && "nav-border-option"
          }`}
        >
          <i class={`fa ${dataOption[4].icon}`}></i> {dataOption[4].type}
        </section>
      </div>
    </div>
  );
}
export default Navbar;
