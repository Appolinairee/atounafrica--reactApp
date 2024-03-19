import { useEffect, useRef } from "react";
import ChatUnit from "./ChatUnit";
import ChatForm from "./ChatForm";

const AtounService = () => {

    const overflowRef = useRef(null);

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

    useEffect(() => {
        if (overflowRef.current && overflowRef.current.clientHeight) {
          overflowRef.current.scrollTop = overflowRef.current.clientHeight;
        }
      }, []);

   return (
      <div className="relative bg-red-500 custom-background h-full w-full">
        <div
         ref={overflowRef}
         className="relative p-2 bottom-0 w-full h-[88%] mb-0  left-0 overflow-auto scrollbar-track-transparent scrollbar-thumb-dark/40 hover:scrollbar-thumb-dark  scrollbar-thin bg-transparent"
        >
            {Messages.map((message, index) => (
                <div key={index + message.message}>
                <ChatUnit message={message} />
                </div>
            ))}
        </div>

        <ChatForm />
      </div>
      
   );
};

export default AtounService;
