import './chats.css'
import { useContext } from 'react'
import ChatsList from'../../../../context/chat'
import Chat from './chat/chat'

const Chats = () => {
    const chats = useContext(ChatsList)
    return(
        <>
        <div className='col-12 col-lg-6 m-3 m-lg-2 mt-lg-3 bg-light shadow-sm  rounded-4  overflow-scroll'>
           {chats.map((item,id=0)=>{
                id++;
                return(<span key={id}><Chat props={item}/></span>)
                
            })}
        </div>
        </>
    )
}

export default Chats