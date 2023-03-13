import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Books from "../../../index/home/category/books/books";
import useAuthentication from "../../../../hooks/useAuthentication";
import axios from "axios";

const LikeOrSave = () => {
  const { query } = useParams();
  const token = useAuthentication();
  const [books, setBooks] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/account/${query}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setBooks(response.data);
      });
  }, [token]);
  return (
    <div className="bg-light shadow rounded-4 row pt-2 ">
      {books? <Books props={books}/>:""}
    </div>
  );
};

export default LikeOrSave;
