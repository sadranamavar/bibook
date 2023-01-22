import Category from "./category/category";
import BookList from "../../../context/books";
import { useContext } from "react";
import "./home.css";
import Footer from "../footer/footer";

const Home = () => {
  const booklist = useContext(BookList);
  return (
    <>
      <div className="body">
        <div className="container mt-5 pt-5">
          <div className="row my-5">
            <Category props={booklist} />
          </div>
          <div className="row my-5">
            <Category props={booklist} />
          </div>
          <div className="row my-5">
            <Category props={booklist} />
          </div>
          <div className="row my-5">
            <Category props={booklist} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
