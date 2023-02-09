import Books from "../../home/category/books/books";
import { useEffect, useState } from "react";
import Title from "./title/title";
import axios from "axios";
import { useParams } from "react-router-dom";

const Filter = () => {
  const { query } = useParams();
  const [BookList, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/`, {
        params: { limit: 20, ordering: query },
      })
      .then(({ data }) => {
        setBookList(data.results);
      });
  }, []);
  return (
    <>
      <div className="row">
        <Books props={BookList} />
      </div>
    </>
  );
};

export default Filter;
