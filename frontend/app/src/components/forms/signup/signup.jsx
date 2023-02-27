import "./signup.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(64, "is-invalid"),
      lastName: Yup.string().max(64, "is-invalid"),
      username: Yup.string()
        .min(4, "is-invalid")
        .max(128, "is-invalid")
        .required("is-invalid")
        .test("is-invalid", () => {
          return true;
        }),
      email: Yup.string()
        .email("is-invalid")
        .required("is-invalid")
        .test("is-invalid", () => {
          return true;
        }),
      password: Yup.string().required("is-invalid"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "is-invalid")
        .required("is-invalid"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">ثبت نام</h1>
        <form className="login-form pt-5" onSubmit={formik.handleSubmit}>
          <div className="pt-5 px-5 d-flex justify-content-center align-items-center">
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">نام خانوادگی</span>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name="firstName"
                className={`${
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : null
                } form-control d-block border m-2 shadow-sm signup-form-input  login-form-input`}
              ></input>
            </div>
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">نام</span>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                className={`${
                  formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : null
                } form-control d-block border m-2 shadow-sm signup-form-input  login-form-input`}
              ></input>
            </div>
          </div>
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
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
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">ایمیل</span>
            <input
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              className={`${
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
          </div>
          <div className="pt-5 px-5 d-flex justify-content-center align-items-center">
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">تکرار رمز عبور</span>
              <input
                type="password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
                name="repeatPassword"
                className={`${
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                    ? formik.errors.repeatPassword
                    : null
                } form-control d-block border m-2 shadow-sm signup-form-input  login-form-input`}
              ></input>
            </div>
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">رمزعبور </span>
              <input
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                className={`${
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                } form-control d-block border m-2 shadow-sm signup-form-input  login-form-input`}
              ></input>
            </div>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              className="mt-5 text-light border-0 fs-4 shadow rounded-5 pb-3 login-submit-form-btn"
              value="ثبت نام"
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

export default SignUp;
