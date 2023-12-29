// import React from "react";

import { github } from "../assets";

function Footer() {
  return (
    <div className="w-full py-1  fixed bottom-0 z-50 bg-[#FDF8F5]">
      <div className="flex items-center justify-center opacity-25">
        <img className="w-7" src={github} alt="" />
        <h3 className="font-semibold text-sm xs:text-lg ">
          @2023 Nitish Raj .All Rights Reserved
        </h3>
      </div>
    </div>
  );
}

export default Footer;
