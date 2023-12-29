// import React from 'react'

import { useSelector } from "react-redux";
import InputBox from "./Components/InputBox";
import MainCard from "./Components/MainCard";
import { github } from "../../assets";

function Search() {
  const search = useSelector((state) => state.search);
  return (
    <div className="  bg-[#FDF8F5] w-full pb-20 min-h-[100vh] ">
      <div className="pb-20">
        <InputBox />
      </div>
      {search.isLoadingUser ? (
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img src={github} className="rounded-full h-28 w-28" />
        </div>
      ) : search.isErrorUser ? (
        <h1 className="text-center font-bold text-4xl  italic text-[#853333]">
          Somthing Wrong
        </h1>
      ) : search.userData === null ? null : (
        <MainCard />
      )}
    </div>
  );
}

export default Search;
