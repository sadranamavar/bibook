import MoreBooks from "./more/more";
import BooksTitle from "./title/title";

import Books from "./books/books";

const Category = ({ props }) => {
  const bookTitle = props.title;
  const booklist = props.books;
  return (
    <>
      <>
        <div className="container books d-block bg-light shadow-sm rounded-4 pb-3">
          <div className="row m-1 mt-3">
            <BooksTitle props={bookTitle} />
            <MoreBooks />
          </div>
          <div className="d-flex overflow-hidden hide-scroll">
            <Books props={booklist} />
          </div>
        </div>
      </>
    </>
  );
};

export default Category;
