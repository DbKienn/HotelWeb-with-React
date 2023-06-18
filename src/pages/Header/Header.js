import "./Header.css";
import "../fomatGeneral.css";
import DateRangeEx from "../../DatePicker/DatePicker";
// --------- FUNCION RELAPCE PAGE---------
const SubmitBtmSearch = (event) => {
  event.preventDefault();
  window.location.replace("./search");
};
const Header = () => {
  return (
    // ---------------------- CONTENT & BTN SIGNIN/REGISTER------------
    <div className="container-header">
      <h1 className="container"> A lifetime of discounts? It's Genius</h1>
      <p className="container">
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account{" "}
      </p>
      <button className="container btn btn-header">Sign in / Register</button>
      {/* ----------------Form Input----------------------- */}
      <form className="form-control">
        <div className="form-control-container">
          <i class="fa fa-bed" id="icon-header"></i>
          <input
            type="text"
            className="form-control-input"
            placeholder="Where are you going ?"
          ></input>
        </div>
        <div className="form-control-container">
          {/*  ---------DATEGRANGE-------- */}
          <DateRangeEx />
        </div>
        <div className="form-control-container form-control-icon">
          <i class="fa fa-user" id="icon-header"></i>

          <input
            type="text"
            className="form-control-input"
            placeholder="1 adult • 0 children • 1 room"
          ></input>
        </div>
        {/* ------- BTN SEARCH -----------*/}
        <button className="btn btn-search" onClick={SubmitBtmSearch}>
          Search
        </button>
      </form>
    </div>
  );
};
export default Header;
