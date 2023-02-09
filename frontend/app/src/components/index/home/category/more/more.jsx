import "./more.css";
import { Link } from "react-router-dom";
const MoreBooks = ({ props }) => {
  return (
    <span className="text-end me-auto ps-3 mt-3 col  link">
      <Link
        style={{ color: "#000", textDecoration: "none" }}
        to={`/book/sort/${props}`}
      >
        more
      </Link>
    </span>
  );
};

export default MoreBooks;
