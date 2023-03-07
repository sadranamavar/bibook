import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./save.css";
import IconNo from "./bookmark-white.png";
import IconYes from "./bookmark.png";

const SaveBtn = ({token}) => {
  const { id } = useParams();

  const [Save, setSave] = useState();
  const ClickHandle = () => {
    axios
      .post(
        `http://127.0.0.1:8000/${id}/save/`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(setSave(!Save));
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/${id}/save/`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setSave(response.data.status);
      });
  }, [token]);
  return (
    <div className="col" onClick={ClickHandle}>
      <img src={Save ? IconYes : IconNo} className="save-btn" alt="" />
    </div>
  );
};

export default SaveBtn;
