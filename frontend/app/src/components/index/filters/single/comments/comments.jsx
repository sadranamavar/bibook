import "./comments.css";
import { useContext } from "react";
import Comments from "../../../../../context/comments";
import BookViewComment from "./comment/comment";

const BookViewComments = () => {
  const comments = useContext(Comments);
  return (
    <>
      <div className="book-view-comments m-5 border border-2 rounded-5 shadow-sm">
        {comments.map((item)=>{
            return (<span key={item.id}><BookViewComment prop={item} /></span>)
        })}
        
      </div>
    </>
  );
};

export default BookViewComments;
