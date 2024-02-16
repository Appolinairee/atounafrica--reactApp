import { BiPhone } from "react-icons/bi";
import { BiSticker } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import { LuShieldQuestion } from "react-icons/lu";
import { BiSend } from "react-icons/bi";



const ChatForm = () => {
    return(
      <div className="absolute w-[98%] left-[1%] h-[50px] bg-transparent bottom-1 z-10">
        
            <form action="" method="post" className="flex flex-nowrap h-full relative gap-1">
              <div className="shadow-boxShadow1 w-[90%] flex relative items-center ml-[2%] rounded-[20px] bg-light">
                 <BiSticker className="absolute  left-[5px] text-dark/90 p-1 hover:bg-dark/20 text-[26px] cursor-pointer rounded-full" />

                <div className="absolute right-[7px] text-dark/90 p-1 rounded-full hover:bg-dark/20">
                    <label htmlFor="image" className="cursor-pointer text-[17px]">
                        <BiImage className="text-[17px]" />
                    </label>

                    <input id="image" className="hidden" type="file" />
                </div>
  
                 <input type="text" name="message" placeholder="Message" className="rounded-[20px] w-full bg-dark/10 pl-8 py-2 text-dark text-[14px]" autoFocus/>
              </div>
              
              <div className="rounded-full w-[10%] bg-primary flex items-center h-[35px] text-light hover:bg-light  cursor-pointer duration-75 hover:!text-primary relative group">

                <BiSend className="absolute w-[70%] h-[70%] top-1/2 left-1/2 m-auto -translate-y-1/2 -translate-x-1/2 text-light z-10 font-bold hover:text-primary" />

                <span className="absolute w-full top-0 left-0 duration-75 group-hover:h-full rounded-full z-1 bg-light h-0"></span>
              </div>
            </form>
        </div>
    )
}

export default ChatForm;
