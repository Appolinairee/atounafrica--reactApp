import { BiCheck } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";

const ChatUnit = ({ message }) => {
   // {
   //   "id": 3,
   //   "content": "messages/PUyKBMnzoUrVfvtEfeegnLBZb4J2YhahzW2i6kAa.jpg",
   //   "type": "image",
   //   "status": 0,
   //   "sender_id": 12,
   //   "receiver_id": 7,
   //   "deleted_at": null,
   //   "created_at": "2024-02-29T21:50:52.000000Z",
   //   "updated_at": "2024-02-29T21:50:52.000000Z",
   //   "is_current_user": true,
   //   "time_ago": "il y a 4 sem."
   // },

   return (
      <div className="">
         <div
            className={`p-2 px-[0.6rem] relative w-fit max-w-[80%] mt-2 rounded-[15px] ${
               message.is_current_user
                  ? "bg-primary !text-light ml-auto"
                  : "bg-light"
            }`}
         >
            {message.type === "image" ? (
               <img
                  src={
                     process.env.REACT_APP_API_URL +
                     "storage/" +
                     message.content
                  }
                  className="max-w-[200px] h-auto"
                  alt={message.content}
               />
            ) : (
               <p className="text-[13px]">{message.content}</p>
            )}

            <p
               className={`text-[10px] flex items-center justify-end gap-1 w-[18%] flex-nowrap text-dark/80 ${
                  message.is_current_user
                     ? "text-light/90 relative justify-center text-right left-1/2 translate-x-[70%]"
                     : ""
               }`}
            >
               <span className={`whitespace-nowrap ${message.is_current_user ? ' mt-1': ''}`}>{message.time_ago}</span>

               {(message.status === 0) && (
                  <span>
                     {(message.status === 0) && <BiCheck />}
                     {(message.status === 1) && <BiCheckShield />}
                     {(message.status === 2) && (
                        <BiCheckShield className="text-blue-700" />
                     )}
                  </span>
               )}
            </p>
         </div>
      </div>
   );
};

export default ChatUnit;
