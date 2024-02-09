import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

const MessageButton = ({messageState}) => {

  const [btnState, setBtnState] = useState(false);

  const handleButton = () => {
      setBtnState(!btnState);
  }

  return (
    <button className={`fixed flex bottom-3 right-3 bg-black w-14 h-14 rounded-full shadow-sm items-center justify-center text-center overflow-hidden ${btnState ? ' scale-95': 'scale-100'} transition-all duration-100`} onClick={handleButton}>
        <BiMessageRoundedDetail  className={`text-4xl  text-light ${btnState ? 'scale-0': 'scale-100'} duration-100 relative left-1/2 -translate-x-1/2 `}  onClick={handleButton}/>
        
        <LiaTimesSolid  className={`text-4xl text-light ${btnState ? 'rotate-0 opacity-1': 'rotate-90 opacity-0'} duration-200 relative left-1/2 -translate-x-[2.6rem]`}  onClick={handleButton} />
    </button>
  )
}

export default MessageButton;