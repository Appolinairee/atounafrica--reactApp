import { useState, useRef, useEffect } from "react";
import MessagesList from "./MessagesList";
import MessageButton from "../BaseComponents/MessageButton";

import { IoSearch } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import Overflow from "../BaseComponents/Overflow";
import Chat from "./Chat";

const Message = () => {
    const [msgType, setMsgType] = useState(0);
    const [msgState, setMsgState] = useState(false);
    const messageRef = useRef(null);
    const [isChat, displayChat] = useState(false);

    const handleMessageType = (index) => {
        setMsgType(index);
    }

    const handleMsgState = () => {
        setMsgState(msgState? false : true);
    }

    const handleChat = () => {
        displayChat(!isChat);
    }

    useEffect(() => {
        if (messageRef.current) {
          messageRef.current.style.transform = `translateX(${-msgType * 100}%)`;
        }
    }, [msgType]);

  return (
    <>
        <MessageButton messageState={msgState} handleMsgState={handleMsgState} />

        <div className={`fixed bg-red right-4 bottom-[60px] bg-light w-[350px] h-[90vh] rounded-tl-[20px] rounded-tr-[20px] rounded-lg z-50 shadow-boxShadow1 ${msgState ? 'block' : 'hidden'} overflow-hidden scrollbar max-w-full xs:right-0`}>

            <div className="bg-primary  pt-4 rounded-tl-[20px] rounded-tr-[20px] text-light">
                <div className="flex items-center mb-5 px-4">
                    <h4 className="text-xl">Messages</h4>

                    <div className="flex items-center gap-5 text-13">
                        <IoSearch className="cursor-pointer hover:bg-light/15 p-1 rounded-full text-[1.4rem]" />
                        <IoSettings className="cursor-pointer hover:bg-light/15 p-1 rounded-full text-[1.4rem]" />
                    </div>
                </div>
        
                <div className="flex items-center justify-between text-[12px] !gap-2 relative w-full pb-2 px-0">
                    <MessageType title="Messages" number={10} index={0} callBack={handleMessageType} msgType={msgType}/>
                    <MessageType title="AtounService" number={10} index={1} callBack={handleMessageType} msgType={msgType}/>
                    <MessageType title="FAQ" number={108} index={2} callBack={handleMessageType} msgType={msgType}  />
                </div>
            </div>

            <div ref={messageRef} className={`flex items-center justify-center duration-100 mt-2`}>
                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList handleChat={handleChat} isChat={isChat} />
                    </div>

                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList />
                    </div>

                    <div className="overflow-auto h-[76vh] scrollbar-thin min-w-[100%]">
                        <MessagesList />
                    </div>
            </div>

            {
                <Chat isChat={isChat} handleChat={handleChat} />
            }
        
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

                <span ref={translateRef} className={`absolute bottom-[0] shadow-boxShadow1 bg-light w-[32%] h-[2.4px] rounded-sm shadow-primary/30 left-0 duration-100`}></span>
            </div>
        </div>
    )
}

export default Message;