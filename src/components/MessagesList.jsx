import Image from "../assets/images/Logo-Atoun.png";
import Image2 from "../assets/images/madeInAfrica.png";
import MessageListElement from "./../BaseComponents/MessageListElement.jsx";
import NothingToDisplay from "../BaseComponents/NothingToDisplay.jsx";
import { useFetchLatestMessages } from "../Features/messages/useFetchUsersLatestMessage.jsx";
import { ImSpinner2, ImSpinner6 } from "react-icons/im";
import Chat from "./Chat.jsx";
import { useState } from "react";

const MessagesList = () => {
   const { isLoading, isError, LatestMessages } = useFetchLatestMessages();
   const [isChat, setIsChat] = useState(false);
   const [secondUserId, setSecondUserId] = useState();
   const [firstUserId, setFirstUserId] = useState();
   const [user, setUser] = useState();

   const handleChat = (firstUserId, secondUserId, user) => {
      setIsChat(!isChat);
      setFirstUserId(firstUserId);
      setSecondUserId(secondUserId);
      setUser(user)
   };

   if (!LatestMessages || LatestMessages.length <= 0) {
      return <NothingToDisplay />;
   }

   return (
      <>
         <div className="p-2 flex flex-col gap-2 pt-4 relative">
            {LatestMessages?.length > 0 ? (
               LatestMessages.map((user, index) => (
                  <MessageListElement
                     key={user.id}
                     element={user}
                     handleChat={handleChat}
                  />
               ))
            ) : (
               <NothingToDisplay text="Aucun message" />
            )}

            {isLoading && (
               <ImSpinner2 className="animate-spin mx-auto text-[1.5rem] my-4" />
            )}
         </div>

         <Chat
            isChat={isChat}
            handleChat={handleChat}
            firstUserId={firstUserId}
            secondUserId={secondUserId}
            messageUser={user}
         />
      </>
   );
};

export default MessagesList;