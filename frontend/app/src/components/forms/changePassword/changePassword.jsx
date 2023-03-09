import image from "./image.png";
import useLogin from "../../../hooks/useLogin";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";

const ChangePassword = () => {
  const login = useLogin();
  const { user, verifyCode } = useParams();
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("is-invalid"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "is-invalid")
        .required("is-invalid"),
    }),
    onSubmit: (value) => {
      axios({
        url: "http://127.0.0.1:8000/account/reset-password",
        method: "patch",
        data: {
          verify_code: verifyCode,
          user: user,
          password: value.password,
        },
      })
        .then(() => {
          login({
            username: user,
            password: value.password,
          });
        })
        .catch(()=>{toast.error("لینک بازیابی دچار مشکل شده لطفا دوباره تلاش کنید")});
    },
  });
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">تغییر رمزعبور</h1>
        <form className="login-form pt-5" onSubmit={formik.handleSubmit}>
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">رمزعبور جدید</span>
            <input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              className={`${
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
          </div>
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">تکرار رمز عبور</span>
            <input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              name="repeatPassword"
              className={`${
                formik.touched.repeatPassword && formik.errors.repeatPassword
                  ? formik.errors.repeatPassword
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              className="mt-5 text-light border-0 fs-4 shadow rounded-5 pb-3 login-submit-form-btn"
              value="تغییر"
            />
            <span className="text-end pb-5 pt-4">
              حساب کاربری دارید؟
              <Link to={"/account/login"} className="link pe-1 fs-4">
                ورود
              </Link>
            </span>
          </div>
        </form>
      </div>

      <img
        src={image}
        className="col-6 d-none d-lg-flex bg-dark rounded-4 rounded-start"
      ></img>
    </>
  );
};

export default ChangePassword;
