import { Link } from "react-router-dom";

const Profile = () => {
  const [title, link] = localStorage.getItem("JWT")
    ? ["پیشخان", "/dashboard"]
    : ["ورود", "/account/login"];
  return (
    <Link to={link} className="px-3  fs-4 mb-2 link mb-2 me-3 nav-item">
      {title}
    </Link>
  );
};

export default Profile;
