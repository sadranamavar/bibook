import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useAuthentication = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const refreshToken = localStorage.getItem("JWT");
  if (!refreshToken) {
    toast.error("برای دسترسی به این صفحه ابتدا وارد شوید");
    navigate("/account/login");
  }
  useEffect(() => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/account/jwt/verify/",
      data: { token: refreshToken },
    })
      .then(() => {
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/account/jwt/refresh/",
          data: { refresh: refreshToken },
        }).then((response) => {
          setToken(response.data.access);
        });
      })
      .catch(() => {
        toast.error('ورود ناموفق لطفا دوباره وارد شوید');
        localStorage.removeItem('JWT')
        navigate("/account/login")
      });
  }, []);
  return `Bearer ${token}`;
};

export default useAuthentication;
