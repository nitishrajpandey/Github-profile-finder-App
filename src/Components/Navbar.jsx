// import React from 'react'

import { NavLink } from "react-router-dom";
import { github } from "../assets";
import { navlinksData } from "../ContextData/index";

function Navbar() {
  return (
    <div className="fixed top-0 w-full ">
      <div className="bg-transparent flex justify-between items-center py-2 px-3 xs:px-5 ss:px-10">
        <div className="">
          <NavLink to={"/"} className={"flex items-center gap-2"}>
            <img className="w-12 " src={github} alt="github logo" />
            <h1 className="font-bold text-3xl ">Github</h1>
          </NavLink>
        </div>
        <div>
          <ul className="hidden sm:flex gap-10 md:gap-20">
            {navlinksData.map((nav) => (
              <li
                key={nav.id}
                className="font-medium  relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#50959E] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#50959E] font-bold" : "text-black"}`
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="font-bold">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
