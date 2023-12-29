// import React from 'react'

import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  fetchGithubUser,
  fetchGithubUserRepo,
} from "../../../Store/searchSlice.js";

function InputBox() {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handelOnclick = () => {
    if (inputElement.current.value.length > 0) {
      dispatch(fetchGithubUserRepo(inputElement.current.value));
      dispatch(fetchGithubUser(inputElement.current.value));

      inputElement.current.value = "";
    }
  };

  return (
    <div className="pt-[150px]">
      <div>
        <h1 className="text-center  text-xl font-bold text-[#50959E]">
          Enter Github Username
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 items-center mt-8">
        <input
          type="text"
          placeholder="Enter github username..."
          required
          className=" max-w-[500px] py-2 rounded-3xl px-10 text-xl shadow-lg outline-none"
          ref={inputElement}
        />

        <button
          className="px-5 py-2  border-2 border-[#50959E] rounded-3xl font-semibold active:scale-95 duration-300 ease-in-out shadow shadow-[#50959E]"
          onClick={handelOnclick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputBox;
