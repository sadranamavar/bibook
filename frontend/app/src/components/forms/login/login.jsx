import "./login.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("is-invalid"),
      password: Yup.string().required("is-invalid"),
    }),
    onSubmit: (value) => {
      console.log(value)
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/account/jwt/create/',
        data: value
      }).then(response=>{localStorage.setItem('JWT',JSON.stringify(response.data))})
      .catch(error=>{console.error(error)})
    },
  });
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">ورود</h1>
        <form className="login-form pt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">نام کاربری</span>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              className={`${
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">رمزعبور</span>
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              className={`${
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
            <Link
              to={"/account/signup"}
              className="text-end text-secondary link"
            >
              بازیابی رمز عبور
            </Link>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              className="mt-5 text-light border-0 fs-3 shadow rounded-5 pb-3 login-submit-form-btn"
              value="ورود"
            />
            <span className="text-end pb-5 pt-4">
              حساب کاربری ندارید؟
              <Link to={"/account/signup"} className="link pe-1 fs-4">
                ثبت نام
              </Link>
            </span>
          </div>
        </form>
      </div>
      <img
        src={image}
        className="col-6 d-none d-lg-flex bg-dark rounded-4 rounded-start"
      />
    </>
  );
};

export default Login;
