import { BiArrowFromRight } from "react-icons/bi";
import Profil from "../assets/photos(exemples)/OIP (3).jpg";
import { BiFace } from "react-icons/bi";
import ChatUnit from "../BaseComponents/ChatUnit";

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
      "time": "10:10 PM"
    },

    {
      "message": "Bonjour Tonton",
      "type": 0,
      "time": "10:10 PM"
    },
    {
      "message": "Je veux demander un rapport de livraison",
      "type": 1,
      "time": "10:10 PM"
    }
  ]

  return (
    <div className="absolute bg-light top-0 left-0 w-full h-full">

       <div className="absolute pt-2 pb-1 px-2 text-light w-full top-0 left-0 bg-primary  flex items-center h-[9%]">

          <div className="flex items-center gap-2 text-[13px] ">
            <div className="flex items-center rounded-2xl hover:bg-light/15 gap-[3px] text-[13px] cursor-pointer p-[3px]">
              <BiArrowFromRight />
              <img className="w-[30px] h-[28px] rounded-full" src={Profil} alt="" />
            </div>

            <p>ASSOGBA Romaric</p>
          </div>

          <BiFace />
       </div>

       <div className="absolute p-2 flex flex-col gap-1 bottom-0 w-full h-[91%] left-0 bg-red-700 mt-8">
          {
            Messages.map((message, index ) => (
              <div key={index+message.message}>
                <ChatUnit message={message} />
                
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Chat;