import Books from "../../home/category/books/books";
import { useEffect, useState } from "react";
import Title from "./title/title";
import axios from "axios";
import { useParams } from "react-router-dom";

const Filter = () => {
  const param = useParams();
  const [BookList, setBookList] = useState([]);
  useEffect(() => {
    const query = param.query
      ? ["ordering", param.query]
      : ["search", param.search];
    let params = { limit: 20 };
    params[query[0]] = query[1];
    axios
      .get(`http://127.0.0.1:8000/`, {
        params,
      })
      .then(({ data }) => {
        setBookList(data.results);
      });
  }, [param]);
  return (
    <>
      <div className="row pt-5">
        <Books props={BookList} />
      </div>
    </>
  );
};

export default Filter;
