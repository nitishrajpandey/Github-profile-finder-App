// import React from 'react'

import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./Components";

function App() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
