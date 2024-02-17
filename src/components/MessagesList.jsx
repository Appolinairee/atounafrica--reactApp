import Image from "../assets/images/Logo-Atoun.png";
import MessageListElement from "./../BaseComponents/MessageListElement.jsx";
import NothingToDisplay from "../BaseComponents/NothingToDisplay.jsx";

const MessagesList = ({ handleChat, isChat }) => {
   const messages = [
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
      {
         image: Image,
         message: "Exactement, je vous reviens très rapidement",
         name: "Confort Meuble Bénin",
         date: "8:05 AM",
         number: 45,
      },
   ];

   return (
      <div className="p-2 flex flex-col gap-5 pt-4">
         {messages.length > 0 ? (
            messages.map((message, index) => (
               <MessageListElement
                  key={index + message.name}
                  element={message}
                  handleChat={handleChat}
               />
            ))
         ) : (
            <NothingToDisplay text="Aucun message" />
         )}
      </div>
   );
};

export default MessagesList;
