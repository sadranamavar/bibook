import "./book.css";
import { Link } from "react-router-dom";

const Book = ({ props }) => {
  return (
    <>
      <div className="mb-3">
        <Link to={`/book/${props.id}`}>
          <img
            className="book-image ms-4 m-2 shadow"
            src={props.image_url}
            alt={props.title}
          />
        </Link>
        <span className="text-center d-block  fs-5">{props.title}</span>
      </div>
    </>
  );
};

export default Book;
