import "./book.css";

const Book = ({ props }) => {

  return (
    <>
      <div className="mb-3">
        <img className="book-image ms-4 m-2 shadow" src={props.image} alt={props.name} />
        <span className="text-center d-block  fs-5">{props.name}</span>
      </div>
    </>
  );
};

export default Book;
