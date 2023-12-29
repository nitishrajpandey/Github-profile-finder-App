// import React from "react";
import { useSelector } from "react-redux";
import { code2, forked, starfilled, blackgrit } from "../../../assets";
import { Link } from "react-router-dom";

function RepoCard() {
  const RepoData = useSelector((state) => state.search);
  return (
    <div className="flex flex-wrap justify-center gap-10 w-[90%] gap-y-[60px] mx-auto">
      {RepoData.repoData.map((items) => (
        <div
          key={items.id}
          className="rounded-2xl shadow-2xl p-5 w-[400px] bg-[#DAECFF] bg-cover bg-center "
          style={{ backgroundImage: `url(${blackgrit})` }}
        >
          <div className="mb-5 mt-3">
            <h1 className="font-semibold text-2xl text-center text-[#084468] mb-5">
              {items.name}
            </h1>
            <p className="text-center text-[#084468] italic">
              {items.description ? items.description : "Empty Area"}
            </p>
          </div>

          <div className="flex justify-between mb-5 ">
            <div className="flex flex-col items-center px-3 gap-3">
              <p className=" font-medium text-xl">{items.stargazers_count}</p>
              <img className="w-8" src={starfilled} alt="" />
            </div>
            <div className="flex flex-col items-center px-3 gap-3">
              <p className=" font-medium text-xl">{items.forks_count}</p>
              <img className="w-5" src={forked} alt="" />
            </div>
            <div className="flex flex-col items-center px-3 gap-3">
              <p className=" font-medium text-xl">{items.language}</p>
              <img className="w-10 " src={code2} alt="" />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to={items.html_url}>
              <button className=" px-8 py-2 bg-[#2C8EBB] text-white font-semibold italic shadow shadow-[#2C8EBB] rounded-2xl">
                Go to
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepoCard;
