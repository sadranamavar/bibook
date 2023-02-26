import "./login.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">ورود</h1>
        <form className="login-form pt-5">
          <div className="row p-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">نام کاربری</span>
            <input
              type="text"
              className="row d-block border m-2 shadow-sm login-form-input"
            ></input>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">رمزعبور</span>
            <input
              type="password"
              className="row d-block border m-2 shadow-sm login-form-input"
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
              <Link to={"/account/signup"} className="link fs-4">
                <t /> ثبت نام
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
