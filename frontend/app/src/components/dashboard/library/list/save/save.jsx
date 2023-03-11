import Books from "../../../../index/home/category/books/books";
import BooksTitle from "../../../../index/home/category/title/title";
import useAuthentication from "../../../../../hooks/useAuthentication";
import { useEffect, useState } from "react";
import axios from "axios";

const Save = () => {
  const [books, setBooks] = useState([]);
  const token = useAuthentication();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/account/saved", {
        headers: { Authorization: token },
      })
      .then((response) => {
        setBooks(response.data);
      });
  }, [token]);
  return (
    <>
      <>
        <div className="container books d-block bg-light shadow-sm rounded-4 pb-3 like-book-list">
          <div className="row m-1 mt-3">
            <BooksTitle props="ذخیره شده" />
          </div>
          <div className="d-flex overflow-hidden hide-scroll">
            <Books props={books} />
          </div>
        </div>
      </>
    </>
  );
};

export default Save;
