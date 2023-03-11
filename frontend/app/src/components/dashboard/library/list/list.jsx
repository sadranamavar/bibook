import Like from "./like/like";
import Save from "./save/save";


const List = () => {
  return (
    <>
      <div className="row my-3">
        <Like />
      </div>
      <div className="row  my-3">
        <Save />
      </div>{" "}
    </>
  );
};

export default List;
