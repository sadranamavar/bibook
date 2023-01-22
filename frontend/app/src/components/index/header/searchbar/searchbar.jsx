import "./searchbar.css";
import logo from "./search-icon.png";

const SearchBar = () => {
  return (
    <>
      <div className="search-focus rounded-5  shadow-sm d-flex search p-3 d-none  d-sm-flex ">
        <input className="p-3 search-input"></input>
        <img
          src={logo}
          className="search-logo d-flex justify-content-end search-focus"
        />
      </div>
    </>
  );
};

export default SearchBar;
