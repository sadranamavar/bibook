import Books from "../../home/category/books/books";
import { useContext } from "react";
import BookList from "../../../../context/books";
import Title from "./title/title";

const Filter = () => {
  const books = useContext(BookList);
  return (
    <>
          <Title props={books.title} />
          <div className="row">
          <Books props={books.books} />
          </div>
    </>
  );
};

export default Filter;
