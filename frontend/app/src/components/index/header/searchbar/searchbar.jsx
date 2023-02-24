import "./searchbar.css";
import logo from "./search-icon.png";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      return navigate(`/book/search/${values.query}`);
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="search-focus rounded-5  shadow-sm d-flex search p-3 d-none  d-sm-flex "
      >
        <input
          id="query"
          name="query"
          onChange={formik.handleChange}
          value={formik.values.query}
          className="p-3 search-input"
        ></input>
        <img
          src={logo}
          className="search-logo d-flex justify-content-end search-focus"
        />
      </form>
    </>
  );
};

export default SearchBar;
