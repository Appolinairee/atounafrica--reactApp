import Profil from "../assets/photos(exemples)/OIP (3).jpg";
import ChatUnit from "../BaseComponents/ChatUnit";
import ChatForm from "../BaseComponents/ChatForm";

import { BiArrowFromRight } from "react-icons/bi";
import { SiCoinmarketcap } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useRef, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "../axiosConfig";
import { useSelector } from "react-redux";

const Chat = ({ isChat, handleChat, firstUserId, secondUserId }) => {
   const overflowRef = useRef(null);
   const [page, setPage] = useState(1);
   const user = useSelector((state) => state.auth.user);


   const anotherUserId = (firstUserId === user?.id) ? secondUserId : firstUserId;
   const token = localStorage.getItem("token");
   const [willFetchNext, setWillFetchNext] = useState(true);

   const Messages = [
      {
         message:
            "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
         type: 0,
         time: "10:10 PM",
      },
      {
         message:
            "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
         type: 1,
         time: "10:10 PM",
         state: 1,
      },

      {
         message: "Bonjour Tonton",
         type: 0,
         time: "10:10 PM",
      },
      {
         message: "Je veux demander un rapport de livraison",
         type: 1,
         time: "10:10 PM",
         state: 1,
      },
      {
         message:
            "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
         type: 0,
         time: "10:10 PM",
      },
      {
         message:
            "Hello! C'est Appolinaire. J'aime bien tes produits. Je peux avoir un canapé à moins de 30.000 Fcfa?",
         type: 1,
         time: "10:10 PM",
         state: 1,
      },

      {
         message: "Bonjour Tonton",
         type: 0,
         time: "10:10 PM",
      },
      {
         message: "Je veux demander un rapport de livraison",
         type: 1,
         time: "10:10 PM",
         state: 1,
      },
   ];

   const [messages, setMessages] = useState(Messages);

   const { isLoading, isError } = useQuery(
      ["messages", page],

      async () => {
         const response = await axios.get(`messages/user/${anotherUserId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
            retry: { retries: 0 },
         });
         return response;
      },
      {
         onSuccess: (response) => {
            if (page === 1) {
               setMessages(response.data.data);
            } else {
               setMessages(messages.concat(response.data.data));
            }

            if (response.data.pagination.total <= messages.length) {
               setWillFetchNext(false);
            }
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   const handleSeeMore = () => {
      if (willFetchNext) setPage((prevPage) => prevPage + 1);
   };

   useEffect(() => {
      // Scroll chat messages to the bottom
      if (overflowRef.current && overflowRef.current.clientHeight) {
         overflowRef.current.scrollTop = overflowRef.current.clientHeight;
      }
   }, []);

   if (isError || !anotherUserId) {
      return <p>Une erreur est survenue</p>;
   }



   return (
      <div
         className={`absolute bg-light top-0 left-0 w-full h-full custom-background ${
            isChat ? "block" : "hidden"
         }`}
      >
         <div className="absolute z-10 pt-2 pb-1 px-2 text-light w-full top-0 left-0 bg-primary flex items-center h-[9%]">
            <div className="flex items-center gap-2 text-[13px] ">
               <div
                  className="flex items-center rounded-2xl hover:bg-light/15 gap-[3px] text-[13px] cursor-pointer p-[3px]"
                  onClick={handleChat}
               >
                  <BiArrowFromRight />
                  <img
                     className="w-[30px] h-[28px] rounded-full"
                     src={Profil}
                     alt=""
                  />
               </div>

               <p className="cursor-pointer">ASSOGBA Romaric </p>
            </div>

            <div className="flex items-center gap-2 mr-1">
               <SiCoinmarketcap className="rounded-full hover:bg-light/15 text-2xl p-1 cursor-pointer" />
               <AiOutlineQuestionCircle className="rounded-full hover:bg-light/15 text-2xl p-1 cursor-pointer" />
            </div>
         </div>
         <div
            ref={overflowRef}
            className="absolute p-2 bottom-0 w-full h-[82%] mb-14 mt-18 left-0 overflow-auto scrollbar-track-transparent scrollbar-thumb-dark/40 hover:scrollbar-thumb-dark  scrollbar-thin bg-transparent"
         >
            {messages.map((message, index) => (
               <div key={message?.id} >
                  <ChatUnit message={message} />
               </div>
            ))}
         </div>
         <ChatForm />
      </div>
   );
};

export default Chat;