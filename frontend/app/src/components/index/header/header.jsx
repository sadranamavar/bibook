import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";
import SearchBar from "./searchbar/searchbar";
import "./header.css";

const Header = () => {
  return (
      <>
      <header className="navbar bg-light fixed-top shadow-sm header nav">
        <div className="d-flex">
          <Logo />
          <SearchBar />
        </div>
        <Navbar />
      </header>
      </>

  );
};

export default Header;
