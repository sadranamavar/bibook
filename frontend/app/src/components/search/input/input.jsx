import "./input.css";
import icon from "./search-icon.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      console.log(values);
      return navigate(`/book/search/${values.query}`);
    },
  });
  return (
    <div className="">
      <form
        onSubmit={formik.handleSubmit}
        className="search-page-form bg-light shadow-sm search-page-focus "
      >
        <img
          src={icon}
          alt=""
          className="search-page-icon  d-none d-sm-inline pb-2"
        />
        <input
          id="query"
          name="query"
          onChange={formik.handleChange}
          value={formik.values.query}
          title="search"
          placeholder="search"
          type="text"
          dir="auto"
          className=" search-page-input ms-1 me-1 fs-4"
        ></input>
        <button type="submit" className="search-page-btn d-block">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
