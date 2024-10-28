import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/dashboard/home" element={<Home />} /> */}
        <Route path="/Courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
