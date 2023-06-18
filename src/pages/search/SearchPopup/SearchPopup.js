import "./SearchPopup.css";
import DateRangeEx from "../../../DatePicker/DatePicker";
const SearchPopup = () => {
  return (
    // ----------- input form--------------
    <div className="searchpopup-container">
      <h3 className=" search-popup">Search</h3>
      <label className="search-popup">Destination</label>
      <br />
      <input className="form-control-search search-popup" type="text"></input>
      <br />
      <label className="search-popup">Check-in Date</label>
      <br />
      {/*  -------Function DateRange---------- */}
      <DateRangeEx />
      <br />
      {/* ---------input form options--------- */}
      <h4 className="search-popup">Options</h4> <br />
      {/* ----------------------- */}
      <div className="form-control-options">
        <div className="input-options-container">
          <label>Min price per night</label>
          <input className="input-option" type="numer"></input>
        </div>
        <div className="input-options-container">
          <label>Max price per night</label>
          <input className="input-option" type="numer"></input>
        </div>
        <div className="input-options-container">
          <label>Adult</label>
          <input className="input-option" type="numer" placeholder="1"></input>
        </div>
        <div className="input-options-container">
          <label>Children</label>
          <input className="input-option" type="numer" placeholder="0"></input>
        </div>
        <div className="input-options-container">
          <label>Room</label>
          <input className="input-option" type="numer" placeholder="1"></input>
        </div>
      </div>
      {/* ----------btn search------------ */}
      <button className="btn btn-searchpopup">Search</button>
    </div>
  );
};
export default SearchPopup;
