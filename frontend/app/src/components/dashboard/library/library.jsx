import "./library.css";
import Like from "./like/like";
import Save from "./save/save";

const Library = () => {
  return (
    <div className="row ms-2 pt-4">
      <div className="row my-3">
        <Like />
      </div>
      <div className="row  my-3">
        <Save />
      </div>
    </div>
  );
};

export default Library;
