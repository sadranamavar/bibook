import "./library.css";
import { useContext } from "react";
import BookList from "../../../../context/books";
import Category from "../../../index/home/category/category";

const Library = () => {
  const books = useContext(BookList);
  return (
    <>
        <Category props={books}/>
    </>
  );
};

export default Library;
