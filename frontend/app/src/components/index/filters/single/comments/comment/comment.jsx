import "./comment.css";
import icon from "./user.svg";
const BookViewComment = ({ prop }) => {
  const image = prop.user.profile ? prop.user.profile:icon
  console.log()
  return (
    <>
      <div className="book-view-comment border-bottom border-1 p-3">
        <div className="text-end ">
          <div className="d-block pb-2 ">
            <img
              className="rounded-circle book-view-comment-image md-3 d-block float-end"
              src={`http://127.0.0.1:8000/media/${image}`}
              alt=''
            />
          </div>
          <p className="rounded-circle book-view-comment-image text-end fs-4 m-3 d-inline">
            {prop.user.username}
          </p>
        </div>

        <p className="text-end fs-6 p-3 d-block">{prop.text}</p>
      </div>
    </>
  );
};

export default BookViewComment;
