import Book from "./book/book";
import "./books.css";


const Books = ({ props }) => {

  return (<>

          {props.map((item) => {
            return (
              <div key={item.id} className="col-6 col-md-4 col-lg-3 col-xxl ">
                <Book props={item} />
              </div>
            );
          })}

  </>);
};

export default Books;
