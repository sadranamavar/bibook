import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import IconNo from "./heart.png";
import IconYes from "./heart(1).png";
import "./like.css";

const LikeBtn = ({ token }) => {
  const { id } = useParams();

  const [Like, setLike] = useState();
  const ClickHandle = () => {
    axios
      .post(
        `http://127.0.0.1:8000/${id}/like/`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(setLike(!Like));
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/${id}/like/`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setLike(response.data.status);
      });
  }, [token]);
  return (
    <div className="col" onClick={ClickHandle}>
      <img src={Like ? IconYes : IconNo} className="like-btn" alt="" />
    </div>
  );
};

export default LikeBtn;
