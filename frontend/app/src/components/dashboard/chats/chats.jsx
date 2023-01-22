import Chat from "../counter/chats/chat/chat"
import { useContext } from "react"
import ChatsList from "../../../context/chat"

const ChatsPage = () => {
    const chats = useContext(ChatsList)
    return (
        <>
        <div className="row mt-4"> 
        <div className="col-12 bg-light p-5 rounded-4 shadow-sm">
        <span className="fs-1 text-center d-block my-auto "> coming soon ...</span>
        </div>
        </div>
        </>
    )
}

export default ChatsPage