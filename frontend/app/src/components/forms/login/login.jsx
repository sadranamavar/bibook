import "./login.css";
import image from './image.jpg'
const Login = () => {
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">ورود</h1>
        <form className="login-form pt-5">
          <div className="row p-5 d-flex justify-content-center align-items-center">
            <span className="d-block  row">نام کاربری</span>
            <input
              type="text"
              className="row d-block m-2 shadow-sm login-form-input"
            ></input>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <span className="d-block row">رمزعبور</span>
            <input
              type="password"
              className="row d-block m-2 shadow-sm login-form-input"
            ></input>
          </div>
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              className="my-5 text-light border-0 shadow-sm rounded-5 p-2 login-submit-form-btn"
              value="ورود"
            />
          </div>
        </form>
      </div>
      <img src={image} className="col-6 d-none d-lg-flex bg-dark rounded-4 rounded-start"></img>
    </>
  );
};

export default Login;
