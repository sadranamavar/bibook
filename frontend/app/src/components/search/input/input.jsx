import "./input.css";
import icon from './search-icon.png'

const SearchInput = () => {
  return (
    <div className="">
      <form className="search-page-form bg-light shadow-sm search-page-focus ">
        <img src={icon} alt="" className="search-page-icon  d-none d-sm-inline pb-2" />
        <input title="search" placeholder="search" type="text" dir="auto" className=" search-page-input ms-1 me-1 fs-4"></input>
        <button type="submit" className="search-page-btn d-block">search</button>
      </form>
    </div>
  );
};

export default SearchInput;
