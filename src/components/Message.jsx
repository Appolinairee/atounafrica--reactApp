import { useState, useRef, useEffect } from "react";
import MessagesList from "./MessagesList";
import MessageButton from "../BaseComponents/MessageButton";

import { IoSearch } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import Overflow from "../BaseComponents/Overflow";
import Chat from "./Chat";
import HiddenBodyScroll from "../BaseComponents/HiddenBodyScroll";

const Message = () => {
    const [msgType, setMsgType] = useState(0);
    const [msgState, setMsgState] = useState(false);
    const messageRef = useRef(null);

    const handleMessageType = (index) => {
        setMsgType(index);
    }

    const handleMsgState = () => {
        setMsgState(msgState? false : true);
    }

    useEffect(() => {
        if (messageRef.current) {
          messageRef.current.style.transform = `translateX(${-msgType * 100}%)`;
        }
    }, [msgType]);

    
    // <HiddenBodyScroll state={msgState} />

  return (
    <>
        <MessageButton messageState={msgState} handleMsgState={handleMsgState} />

        <div className={`fixed bg-red right-4 bottom-[60px] bg-light w-[350px] h-[90vh] rounded-tl-[20px] rounded-tr-[20px] rounded-lg z-50 shadow-boxShadow1 ${msgState ? 'block' : 'hidden'} overflow-hidden scrollbar`}>
            <div className="bg-primary px-4 pt-6 rounded-tl-[20px] rounded-tr-[20px] text-light">
                <div className="flex items-center mb-7">
                    <h4 className="text-xl">Messages</h4>

                    <div className="flex items-center gap-5 text-13">
                        <IoSearch className="cursor-pointer" />
                        <IoSettings className="cursor-pointer" />
                    </div>
                </div>
        
                <div className="flex items-center justify-between text-[12px] !gap-2 relative w-full pb-2">
                    <MessageType title="Messages" number={10} index={0} callBack={handleMessageType} msgType={msgType}/>
                    <MessageType title="AtounService" number={10} index={1} callBack={handleMessageType} msgType={msgType}/>
                    <MessageType title="FAQ" number={108} index={2} callBack={handleMessageType} msgType={msgType}  />
                </div>
            </div>

            <div ref={messageRef} className={`flex items-center justify-center duration-100`}>
                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList />
                    </div>

                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList />
                    </div>

                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList />
                    </div>
            </div>

            <Chat />
        </div>

        {
            msgState &&
            <Overflow handleOverflow={handleMsgState} className="!fixed bg-transparent z-45 !right-[20px] w-[100vw] " />
        }
    </>
  )
}




const MessageType = ({title, number, index, callBack, msgType}) => {
    const translateRef = useRef(null);

    useEffect(() => {
        if (translateRef.current) {
          translateRef.current.style.left = `${msgType * 34}%`;
        }
    }, [msgType]);

    return(
        <div className="flex items-center justify-center w-1/3">
            <div className={`flex items-center left-1/2 m-auto justify-center gap-1 cursor-pointer pb-1 px-1`} onClick={() => callBack(index)}>
                <p>{title}</p>
                <span className="text-[9px] px-1 py-[0.125rem] font-medium bg-light text-dark rounded-full">{number}</span>

                <span ref={translateRef} className={`absolute bottom-[0] bg-light w-[32%] h-[2px] rounded-sm shadow-boxShadow1 shadow-black/30 left-0 duration-100`}></span>
            </div>
        </div>
    )
}

export default Message;