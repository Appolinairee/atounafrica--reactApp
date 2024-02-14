import { BiCheck } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";

const ChatUnit = ({message}) => {
  return (
    <div className="">
        <div className={`p-2 relative w-fit max-w-[80%] mt-2 rounded-[15px] ${message.type == 1 ? 'bg-primary !text-light left-[20%]' : 'bg-light'}`}>
            <p className="text-[13px]">{message.message}</p>

            <p className={`text-[10px] flex items-center justify-end gap-1 w-[18%] flex-nowrap text-dark/80 ${message.type == 1 ? 'text-light/80 relative left-[78%]' : ''}`}>
              
              <span className="whitespace-nowrap">{message.time}</span>

              {
                message.state && <span>
                { (message.state == 0) && <BiCheck /> }
                { (message.state == 1) && <BiCheckShield /> }
                { (message.state == 2) && <BiCheckShield className="text-blue-700" /> }
              </span>
              }
              
            </p>
        </div>
    </div>
  )
}

export default ChatUnit;