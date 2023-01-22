import { createContext } from "react";

const ChatsList = createContext(
    [
        {
            name : 'user1',
            image:"",
            new:"yes"
        },{
            name : 'user2',
            image:"",
            new:"yes"

        },{
            name : 'user3',
            image:"" ,
            new:"no"
        },
        
    ]
)

export default ChatsList
