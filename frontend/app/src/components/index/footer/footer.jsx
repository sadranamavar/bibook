import github from "./github.png";
import android from "./android.png";
import apple from "./apple.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-light shadow fix-botton footer">
        <div className="navbar d-flex">
          <div>
            <img src={github} className="icon mx-2 ops-90" />
            <img src={android} className="icon mx-2 ops-90" />
            <img src={apple} className="icon mx-2 ops-90" />
          </div>
          <div className="me-2 license">
            <p className="text-center m-1 text-gray">©MIT License</p>
          </div>
          <span className="d-block"></span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
