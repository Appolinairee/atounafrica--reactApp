import { FaRegUser } from "react-icons/fa";

const MessageListElement = ({ element, handleChat }) => {

    const firstUserId = element.latest_message.sender_id;
    const secondUserId = element.latest_message.receiver_id;

   return (
      <div
         className="flex justify-between items-center gap-2 text-[13px] cursor-pointer border-solid border-0 border-b-[1px] w-[95%] mx-auto border-dark/5 pb-3"
         onClick={() => handleChat(firstUserId, secondUserId, element)}
      >
         <div className="max-w-[40px] h-[36px] rounded-full w-[15%] border-solid border-dark/5 border-[1px] overflow-hidden">
            {element.creator ? (
               <img
                  className="w-full h-full"
                  src={
                     process.env.REACT_APP_API_URL +
                     "storage/" +
                     element.creator.logo
                  }
                  alt={element.name}
               />
            ) : (
               <FaRegUser />
            )}
         </div>

         <div className="relative w-[70%]">
            <h4 className="font-medium text-[14px]">
               {element.creator ? element.creator.name : element.name}
            </h4>

            <p className="text-dark/80 whitespace-nowrap">
               {element.latest_message.type === "image"
                  ? "Une photo.."
                  : element.latest_message.content?.slice(0, 30)}

               {element.latest_message?.content.length > 30 && <span>...</span>}
            </p>
         </div>

         <div className="w-[20%] text-right">
            <span className="text-[10px] whitespace-nowrap">
               {element.latest_message.time_ago}
            </span>
            <br />

            {
               <span className="bg-primary rounded-full px-1 text-light text-[10px] font-medium ">
                  {1}
               </span>
            }
         </div>
      </div>
   );
};

export default MessageListElement;
