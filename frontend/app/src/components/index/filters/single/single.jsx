import "./single.css";
import Book from "../../../../context/book";
import { useContext } from "react";
import BookViewImage from "./image/image";
import BookViewDetail from "./detail/detail";
import BookViewDownload from "./download/download";
import BookViewAbout from "./about/about";
import BookViewComments from "./comments/comments";
import Actions from "./actions/actions";

const Body = () => {
  const book = useContext(Book);

  return (
    <>
      <div className="row">
        <BookViewImage props={book} />
        <div className="col-lg-8 col-12">
          <BookViewDetail book={book} />
          <Actions />
          <BookViewDownload props={book.url} />
        </div>
      </div>
      <div>
        <BookViewAbout props={book.about} />
      </div>
      <BookViewComments />
    </>
  );
};

export default Body;
