// import React from 'react'

import { Link } from "react-router-dom";
import { githubnew, mainbg } from "../../../assets";
import { mainpageData } from "../ContextData";

function MainPage() {
  return (
    <div
      style={{ backgroundImage: `url(${mainbg})` }}
      className="w-full h-[100vh] bg-cover bg-center px-10"
    >
      <div className=" ">
        <div className="flex justify-center mb-3 pt-24 md:pt-28 ">
          <img
            className="w-[200px] md:w-[250px] lg:w-[300px2]"
            src={githubnew}
            alt=""
          />
        </div>
        <div className="text-center mb-3">
          <h1 className="text-4xl ss:text-6xl font-extrabold text-[#50959E] font-mono italic mb-3">
            {mainpageData.mainHeading}
          </h1>
          <h4 className="text-xl font-medium text-red-400">
            {mainpageData.subHeading}
          </h4>
        </div>
        <div className="text-center flex justify-center mb-4 ">
          <p className="tracking-wide text-lg max-w-screen-ss  ">
            {mainpageData.context}
          </p>
        </div>
        <div className="text-center">
          <Link to={"/search"}>
            <button className="px-5 py-2 border-2 border-red-400 rounded-full italic font-semibold shadow shadow-red-400 active:scale-95 ease-in-out ">
              {mainpageData.butn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
