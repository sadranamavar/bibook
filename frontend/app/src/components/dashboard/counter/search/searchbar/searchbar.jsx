import "./searchbar.css";

const SearchBar = () => {
  return (
    <>
      <form className="text-center ">
        <input
          type="text"
          className="shadow-sm  dashboard-search-input"
          placeholder="search"
          dir="auto"
        ></input>
        <button
          type="submit"
          className="row mx-auto shadow-sm mb-5 p-2 dashboard-search-btn"
        >
          search
        </button>
      </form>
    </>

  );
};

export default SearchBar;
