import SearchInput from "./input/input";
import SearchLogo from "./logo/logo";
import "./search.css";

const Search = () => {
  return (
    <div className="bg-set">
      <div className="search-body">
        <div className="search-page-item">
          <SearchLogo />
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Search;
