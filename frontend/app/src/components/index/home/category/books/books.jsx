import Book from "./book/book";
import "./books.css";

const Books = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        if (item.image_url[0] === "/") {
          item.image_url = `http://127.0.0.1:8000${item.image_url}`;
        }
        return (
          <div key={item.id} className="col-6 col-md-4 col-lg-3 col-xxl ">
            <Book props={item} />
          </div>
        );
      })}
    </>
  );
};

export default Books;
