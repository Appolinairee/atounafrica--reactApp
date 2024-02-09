import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const Message = () => {
    const [msgState, setMsgState] = useState(0);

  return (
    <div className="fixed bg-red right-4 bottom-[50px] bg-light w-[350px] h-[90vh] rounded-lg z-50">
        <div className="bg-primary px-4 py-3 rounded-s-md rounded-r-md text-light">
            <div className="flex items-center mb-5">
                <h4 className="text-xl">Messages</h4>

                <div className="flex items-center gap-5 text-13">
                    <IoSearch />
                    <IoSettings />
                </div>
            </div>

            <div className="flex items-center justify-between text-[13px]">
                <MessageType title="Messages" number={10} />
                <MessageType title="AtounService" number={10} />
                <MessageType title="FAQ" number={108} />
            </div>
        </div>

    </div>
  )
}


const MessageType = ({title, number}) => {
    return(
        <div className="flex items-center justify-center gap-1">
            <p>{title}</p>
            <span className="text-[9px] px-1 py-[0.125rem] font-medium bg-light text-dark rounded-full">{number}</span>
        </div>
    )
}

export default Message;