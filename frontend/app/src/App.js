// style import <--
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//component import <--
import SingleBook from "./components/index/filters/single/single";
import Search from "./components/search/search";
import Filter from "./components/index/filters/filter/filter";
import Dashboard from "./components/dashboard/dashboard";
import Index from "./components/index";
import Filters from "./components/index/filters/filter";
import Home from "./components/index/home/home";
import Library from "./components/dashboard/library/library";
import List from './components/dashboard/library/list/list';
import LikeOrSave from "./components/dashboard/library/LikeOrSave/LikeOrSave";
import Counter from "./components/dashboard/counter/counter";
import ChatsPage from "./components/dashboard/chats/chats";
import Forms from "./components/forms/forms";
import Login from "./components/forms/login/login";
import SignUp from "./components/forms/signup/signup";
import ResetPassword from "./components/forms/resetPassword/resetPassword";
import ChangePassword from "./components/forms/changePassword/changePassword";
// router dom <--
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// toaster <--
import {  Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
      <Toaster   
        position="top-right"
        reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="" element={<Home />} />
            <Route path="/book" element={<Filters />}>
              <Route path="sort/:query" element={<Filter />} />
              <Route path="search/:search" element={<Filter />} />
              <Route path=":id" element={<SingleBook />} />
            </Route>
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="" element={<Counter />}/> 
            <Route path="library" element={<Library />}>
              <Route path="" element={<List />}/>
              <Route path=":query" element={<LikeOrSave />}/>
            </Route> 
            <Route path="chats" element={<ChatsPage />}/> 
          </Route>
          <Route path="/account" element={<Forms />}>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="reset-password" element={<ResetPassword/>} />
            <Route path="change-password/:user/:verifyCode" element={<ChangePassword />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
