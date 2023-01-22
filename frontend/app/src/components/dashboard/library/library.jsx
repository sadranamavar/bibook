import "./library.css";
import Category from "../../index/home/category/category";
import { useContext } from "react";
import BookList from "../../../context/books";

const Library = () => {
  const books = useContext(BookList);
  return (
    <div className="row ms-2 pt-4">
      <div className="row my-3">
        <Category props={books} />
      </div>
      <div className="row  my-3">
        <Category props={books} />
      </div>
    </div>
  );
};

export default Library;
