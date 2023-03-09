import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate()
  return (data) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/account/jwt/create/",
      data: data,
    })
      .then((response) => {
        localStorage.setItem("JWT", response.data.refresh);
        toast.success("ورود با موفقیت انجام شد");
        toast('خوش آمدید', {icon:"👋️"})
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error("نام کاربری یا رمزعبور اشتباه است");
      });
  };
};

export default useLogin;
