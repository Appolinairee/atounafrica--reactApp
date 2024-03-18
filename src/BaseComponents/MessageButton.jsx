import { BiMessageRoundedDetail } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

const MessageButton = ({messageState, handleMsgState, className}) => {

  return (
    <button className={` flex bg-black w-14 h-14 rounded-full shadow-sm items-center justify-center text-center overflow-hidden xs:w-10 xs:h-10 md: md:h-11 md:w-11 z-50 ${className} ${messageState ? ' scale-75': 'scale-100'} transition-all duration-100`} onClick={handleMsgState} >
        <BiMessageRoundedDetail  className={`text-4xl  text-light ${messageState ? 'scale-0': 'scale-100'} duration-100 relative left-1/2 -translate-x-1/2 `}  onClick={handleMsgState}/>
        
        <LiaTimesSolid  className={`text-4xl md:-translate-x-[2rem] xs:-translate-x-[1.9rem] text-light ${messageState ? 'rotate-0 opacity-1': 'rotate-90 opacity-0'} duration-200 relative left-1/2 -translate-x-[2.6rem]`}  onClick={handleMsgState} />
    </button>
  )
}

export default MessageButton;