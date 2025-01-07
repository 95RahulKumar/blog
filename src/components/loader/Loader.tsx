import { RootState } from "@store/store";
import React from "react";
import { useSelector } from "react-redux";
import './loader.scss'
const Loader = () => {
  const { loading } = useSelector((state: RootState) => state.axios);
  console.log("+++++", loading);

  return <>
  {loading && <div className="overlay">
        <div className="loader"></div>
    </div>}
  </>;
};

export default Loader;
