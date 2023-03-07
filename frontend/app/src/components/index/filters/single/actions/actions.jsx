import { useEffect, useRef, useState } from "react";
import useAuthentication from "../../../../../hooks/useAuthentication";
import LikeBtn from "./like/like";
import SaveBtn from "./save/save";

const Actions = () => {
  const token = useAuthentication();
  
  return (
    <div className="container">
      <div className="row justify-content-start me-1">
        <div className="col-2 ms-5 ms-lg-auto ms-xl-4 row justify-content-center shadow-sm rounded-3 border p-1 border-2 me-5">
          <SaveBtn token={token}/>
          <LikeBtn token={token}/>
        </div>
      </div>
    </div>
  );
};

export default Actions;
