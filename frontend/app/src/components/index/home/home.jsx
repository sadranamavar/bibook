import Category from "./category/category";
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [Books, setBooks] = useState([]);
  const ListOfQuery = {
    liked: "محبوب ترین ها",
    created_time: "جدید ترین",
    saved: "پرطرفدار ترین",
  };
  useEffect(() => {
    const getData = async (query, id) => {
      const { data } = await axios.get(`http://127.0.0.1:8000/`, {
        params: {
          limit: 4,
          ordering: query,
        },
      });
      setBooks((Books) => [
        ...Books,
        {
          id: id,
          title: ListOfQuery[query],
          books: data.results,
          query: query,
        },
      ]);
    };
    let id = 0;
    for (const i in ListOfQuery) {
      getData(i, id);
      id++;
    }
  }, []);
  return (
    <>
      <div className="body">
        <div className="container mt-5 pt-5">
          {Books.map((item) => {
            return (
              <div key={item.id} className="row my-5">
                <Category props={item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
