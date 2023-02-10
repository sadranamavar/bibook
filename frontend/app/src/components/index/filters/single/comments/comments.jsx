import "./comments.css";
import { useEffect, useState } from "react";
import BookViewComment from "./comment/comment";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookViewComments = () => {
  const { id } = useParams();
  const [Comment, setComment] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${id}/get-comments/`)
    .then(({ data }) => {
      setComment(data);
    });
  }, []);
  return (
    <>
      <div className="book-view-comments m-5 border border-2 rounded-5 shadow-sm">
        {Comment.map((item) => {
          return (
            <span>
              <BookViewComment prop={item} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default BookViewComments;
