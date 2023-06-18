import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../search/Search.css";
const Search = () => {
  return (
    <div className="search-container">
      <Navbar />
      <div className="search-grid">
        <SearchPopup />
        <SearchList />
      </div>

      <Footer />
    </div>
  );
};

export default Search;
