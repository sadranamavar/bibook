import Links from "./links/links";
import Logo from "./logo/logo";
import "./navbar.css";

const NavBar = ({props}) => {
    const notprops = props==='none' ? 'block':'none'
    return (
    <>
      <div
        className={`d-${props} d-lg-${notprops} my-3
        text-center ms-lg-4 shadow rounded-5  
        bg-light nav-bar p-5 
        col-12 col-lg-3 col-xxl-2`}
      >
        <div>
          <Logo />
          <div>
            <Links props={{ title:'پیشخوان', link:'/dashboard'}} />
            <Links props={{title:"کتابخانه", link:'library'}} />
            <Links props={{title:"گفتگو ها", link:'chats'}} />
            <Links props={{title:"تنظیمات", link:"#"}} />
            <Links props={{title:"پشتیبانی", link:'#'}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
