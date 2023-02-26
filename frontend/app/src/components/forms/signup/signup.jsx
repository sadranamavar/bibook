import "./signup.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">ثبت نام</h1>
        <form className="login-form pt-5">
          <div className="pt-5 px-5 d-flex justify-content-center align-items-center">
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">نام</span>
              <input
                type="text"
                className="d-block border m-2 shadow-sm signup-form-input  login-form-input"
              ></input>
            </div>
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">نام خانوادگی</span>
              <input
                type="text"
                className="d-block border m-2 shadow-sm signup-form-input  login-form-input"
              ></input>
            </div>
          </div>
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">نام کاربری</span>
            <input
              type="text"
              className="row d-block border m-2 shadow-sm login-form-input"
            ></input>
          </div>
          <div className="row pt-5 px-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">ایمیل</span>
            <input
              type="email"
              className="row d-block border m-2 shadow-sm login-form-input"
            ></input>
          </div>
          <div className="pt-5 px-5 d-flex justify-content-center align-items-center">
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">تکرار رمز عبور</span>
              <input
                type="password"
                className="d-block border m-2 shadow-sm signup-form-input  login-form-input"
              ></input>
            </div>
            <div className="col-6 mx-3">
              <span className="d-block text-end pe-4 row">رمزعبور </span>
              <input
                type="password"
                className="d-block border m-2 shadow-sm signup-form-input  login-form-input"
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
              <Link to={"/account/login"} className="link fs-4">
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
