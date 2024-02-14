import { BiArrowFromRight } from "react-icons/bi";
import Profil from "../assets/photos(exemples)/OIP (3).jpg";
import { BiFace } from "react-icons/bi";
import ChatUnit from "../BaseComponents/ChatUnit";
import { BiPhone } from "react-icons/bi";
import { BiSticker } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import { BiSolidFileDoc } from "react-icons/bi";
import { BiFileFind } from "react-icons/bi";

const Chat = () => {
  
  const Messages = [
    {
      "message": "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
      "type": 0,
      "time": "10:10 PM"
    },
    {
      "message": "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
      "type": 1,
      "time": "10:10 PM",
      "state": 1
    },

    {
      "message": "Bonjour Tonton",
      "type": 0,
      "time": "10:10 PM"
    },
    {
      "message": "Je veux demander un rapport de livraison",
      "type": 1,
      "time": "10:10 PM",
      "state": 1
    },
    {
      "message": "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
      "type": 0,
      "time": "10:10 PM"
    },
    {
      "message": "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
      "type": 1,
      "time": "10:10 PM",
      "state": 1
    },

    {
      "message": "Bonjour Tonton",
      "type": 0,
      "time": "10:10 PM"
    },
    {
      "message": "Je veux demander un rapport de livraison",
      "type": 1,
      "time": "10:10 PM",
      "state": 1
    },
  ]

  return (
    <div className="absolute bg-light top-0 left-0 w-full h-full custom-background">

       <div className="absolute z-10 pt-2 pb-1 px-2 text-light w-full top-0 left-0 bg-primary flex items-center h-[9%]">

          <div className="flex items-center gap-2 text-[13px] ">
            <div className="flex items-center rounded-2xl hover:bg-light/15 gap-[3px] text-[13px] cursor-pointer p-[3px]">
              <BiArrowFromRight />
              <img className="w-[30px] h-[28px] rounded-full" src={Profil} alt="" />
            </div>

            <p>ASSOGBA Romaric</p>
          </div>

          <BiFace />
       </div>

       <div className="absolute p-2 bottom-0 w-full h-[82%] mb-14 mt-18 left-0 overflow-auto scrollbar-thin bg-transparent">
          {
            Messages.map((message, index ) => (
              <div key={index+message.message}>
                <ChatUnit message={message} />

              </div>
            ))
          }
        </div>
        
        <div className="absolute w-[98%] left-[1%] h-[50px] bg-transparent bottom-1 z-10">
          <form action="" method="post" className="flex flex-nowrap relative gap-1">

            <div className="shadow-boxShadow1 w-[90%] flex relative items-center rounded-[20px] bg-light">
               <BiSticker className="absolute  left-[5px] text-dark/90 p-1 hover:bg-dark/20 text-[26px] cursor-pointer rounded-full" />

               <BiImage className="absolute right-[5px] text-dark/90 p-1 bg-dark/10 text-[26px] cursor-pointer rounded-full" />

               <BiSolidFileDoc className="absolute right-[30px] text-dark/90 p-1 hover:bg-dark/10 text-[26px] cursor-pointer rounded-full" />

               <input type="text" name="message" placeholder="Message" className="rounded-[20px] w-full bg-dark/10 pl-8 py-2 text-dark text-[14px]" autoFocus/>
            </div>
            
            <div className="rounded-full w-[10%] bg-primary flex items-center h-[35px] text-light ">
              <BiPhone className="m-auto text-xl" />
            </div>
          </form>
        </div>

    </div>
  )
}

export default Chat;