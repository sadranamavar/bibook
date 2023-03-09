import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import image from "./image.jpg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      user: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("is-invalid"),
    }),
    onSubmit: (value) => {
      toast.promise(
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/account/reset-password",
          data: value,
        }).then(()=>{navigate('/account/login')}),
        {
          loading: "در حال ارسال لینک بازیابی",
          success: "لینک بازیابی ارسال شد",
          error: "نام کاربری یا ایمیل اشتباه است",
        }
      );
    },
  });
  return (
    <>
      <div className="col-12 col-lg-6">
        <h1 className="text-center m-5 pt-3">دریافت رمزعبور</h1>
        <form className="login-form pt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-5 d-flex justify-content-center align-items-center">
            <span className="d-block text-end row">ایمیل یا نام کاربری</span>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.user}
              name="user"
              className={`${
                formik.touched.user && formik.errors.user
                  ? formik.errors.user
                  : null
              } form-control row d-block border m-2 shadow-sm login-form-input`}
            ></input>
          </div>

          <div className="row px-5 d-flex justify-content-center align-items-center">
            <input
              type="submit"
              className="mt-2 text-light border-0 fs-3 shadow rounded-5 pb-2 login-submit-form-btn"
              value="بازیابی"
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

export default ResetPassword;
