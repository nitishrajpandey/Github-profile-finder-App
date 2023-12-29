// import React from 'react'
import { useSelector } from "react-redux";
import RepoCard from "./RepoCard";
import { blackgrit, github } from "../../../assets";
import { Link } from "react-router-dom";

function MainCard() {
  const search = useSelector((state) => state.search);
  const githubUserData = useSelector((state) => state.search.userData);
  return (
    <div className="mt-20">
      <div className="px-5 xs:px-10">
        {/* card 1 */}
        <div className="bg-[#50959E] rounded-xl max-w-[600px] md:max-w-[900px] mx-auto rotate-0 ss:rotate-3 -z-10">
          <div
            className="flex flex-col items-center md:flex-row max-w-[600px] md:max-w-[900px] justify-between py-10 rounded-xl mx-auto rotate-0 ss:-rotate-3 bg-[#FAE2DA] bg-cover bg-center"
            style={{ backgroundImage: `url(${blackgrit})` }}
          >
            <div className="md:w-[50%] flex flex-col items-center">
              <img
                className="w-[200px] rounded-full border border-[#084468] "
                src={githubUserData.avatar_url}
                alt=""
              />
              <div className="px-7 flex flex-col items-center mt-5 gap-2">
                <h1 className="font-bold text-3xl text-[#084468]">
                  {githubUserData.name}
                </h1>
                <h4>{githubUserData.location}</h4>
                <p className="">{githubUserData.bio}</p>
              </div>
            </div>
            <div className="md:w-[50%]">
              <div className="flex m-5 flex-col">
                <div className="flex justify-between m-3 ss:m-5">
                  <div className="text-[#08487D] font-semibold flex flex-col gap-2">
                    <h4>Username</h4>
                    <h4>Company</h4>
                    <h4>Created At</h4>
                    <h4>Followers</h4>
                    <h4>Following</h4>
                    <h4>Public Repo</h4>
                  </div>
                  <div className="text-[#08487D] font-medium flex flex-col items-end gap-2">
                    <h4>{githubUserData.login}</h4>
                    <h4>
                      {githubUserData.company ? githubUserData.company : "null"}
                    </h4>
                    <h4>
                      {new Date(githubUserData.created_at).toLocaleString()}
                    </h4>
                    <h4>{githubUserData.followers}</h4>
                    <h4>{githubUserData.following}</h4>
                    <h4>{githubUserData.public_repos}</h4>
                  </div>
                </div>
                <div className="mt-8 flex justify-center items-center">
                  <Link to={githubUserData.html_url}>
                    <button className=" px-8 py-2 bg-[#2C8EBB] text-white font-semibold italic shadow shadow-[#2C8EBB] rounded-2xl">
                      Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        {/* {search.repoData === null ? null : <RepoCard />} */}
        {search.isLoadingRepo ? (
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img src={github} className="rounded-full h-28 w-28" />
          </div>
        ) : search.repoData === null ? null : (
          <RepoCard />
        )}
      </div>
    </div>
  );
}

export default MainCard;
