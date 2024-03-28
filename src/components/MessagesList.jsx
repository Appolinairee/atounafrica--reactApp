import Image from "../assets/images/Logo-Atoun.png";
import Image2 from "../assets/images/madeInAfrica.png";
import MessageListElement from "./../BaseComponents/MessageListElement.jsx";
import NothingToDisplay from "../BaseComponents/NothingToDisplay.jsx";
import { useFetchLatestMessages } from "../Features/messages/useFetchUsersLatestMessage.jsx";
import { ImSpinner2, ImSpinner6 } from "react-icons/im";

const MessagesList = ({ handleChat, isChat }) => {
   const { isLoading, isError, LatestMessages } = useFetchLatestMessages();

   return (
      <div className="p-2 flex flex-col gap-2 pt-4">
         {LatestMessages?.length > 0 ? (
            LatestMessages.map((message, index) => (
               <MessageListElement
                  key={index + message.name}
                  element={message}
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
   );
};

export default MessagesList;
