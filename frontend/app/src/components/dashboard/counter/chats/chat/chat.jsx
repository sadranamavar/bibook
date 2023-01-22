import "./chat.css";
import icon from './user.svg'

const Chat = ({ props }) => {
    const image = props.image ? props.image:icon
    const New = props.new==="yes" ? "inline":"none"
  return (
    <div className="shadow-sm border rounded-5 p-3 my-3 counter-chat">
      <img src={image} className='mx-2 counter-chat-image' alt="" />
      <span className="fs-5">{props.name}</span>
      <span className={`bg-info d-${New} rounded-4 p-1 px-2 mx-2`}>new</span>
    </div>
  );
};

export default Chat;
