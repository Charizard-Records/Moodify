import React from "react";
import {Outlet} from 'react-router-dom'
import MoodifyNav from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-black ">
      <MoodifyNav />

      <Outlet />
    </div>
  );
};

export default App;
