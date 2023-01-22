import LikeBtn from "./like/like";
import SaveBtn from "./save/save";

const Actions = () => {
  return (
    <div className="container">
      <div className="row justify-content-start me-1">
        <div className="col-2 ms-5 ms-lg-auto ms-xl-4 row justify-content-center shadow-sm rounded-3 border p-1 border-2 me-5">
        <SaveBtn/>
        <LikeBtn />
        </div>
      </div>
    </div>
  );
};

export default Actions;
