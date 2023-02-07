import "./single.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookViewImage from "./image/image";
import BookViewDetail from "./detail/detail";
import BookViewDownload from "./download/download";
import BookViewAbout from "./about/about";
import BookViewComments from "./comments/comments";
import Actions from "./actions/actions";

const Body = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      const { data } = await axios.get(`http://127.0.0.1:8000/${id}`);

      setData(data);
    };

    getData(id);
  }, []);

  return (
    <>
      <div className="row">
        <BookViewImage props={Data} />
        <div className="col-lg-8 col-12">
          <BookViewDetail book={Data} />
          <Actions />
          <BookViewDownload props={Data.file_url} />
        </div>
      </div>
      <div>
        <BookViewAbout props={Data.about} />
      </div>
      <BookViewComments />
    </>
  );
};

export default Body;
