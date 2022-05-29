import React from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftBar from "./components/LeftSideBar/LeftBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home profile={true}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
