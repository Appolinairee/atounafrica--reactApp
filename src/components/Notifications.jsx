import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

import NothingToDisplay from "../BaseComponents/NothingToDisplay";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";
import { useFetchNotifications } from "../Features/notifications/useFetchNotifications";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../axiosConfig";

const Notification = ({ id, message, icon, state, date, link }) => {
   const authToken = localStorage.getItem("token");

   const handleNotification = async () => {
      if (state == 0) {
         try {
            await axios.put(
               `notifications/${id}`,
               {},
               {
                  headers: {
                     Authorization: `Bearer ${authToken}`,
                  },
               }
            );
         } catch (error) {
            console.error("Error fetching user data:", error);
         }
      }
   };

   return (
      <Link
         to={link}
         onClick={handleNotification}
         className={`${
            state === "1"
               ? "bg-dark/5 border-light"
               : "bg-secondary/30 border-dark/5"
         } p-2 px-5 flex gap-3 w-fit border-solid border-0 border-b-[0.5px]`}
      >
         <p className="bg-primary p-2 rounded-full w-fit text-light">{icon}</p>

         <div className="font-medium">
            <p className="text-[13px]">{message}</p>
            <span className="text-[12px]">{date}</span>
         </div>
      </Link>
   );
};

const IconFromLink = ({ link }) => {

   if (link?.includes("/produit")){
      return <FaShoppingCart />;
   } else if (link?.includes("/utilisateur")) {
      return <FaUserPlus />;
   } else if (link?.includes("/commande")) {
      return <FaShoppingCart />;
   } else {
      return <MdOutlineNotifications />;
   }
};

const Notifications = ({ handleNotification, notificationState }) => {
   const [notificationType, setNotificationType] = useState(false);
   const { isLoading, Notifications } = useFetchNotifications();

   const Messages = [];

   console.log(Notifications)

   return (
      <div
         className={`fixed top-0 right-0 h-full w-full bg-transparent ${
            notificationState ? "z-50 block" : "z-0 w-0 hidden"
         }`}
      >
         <div
            className={`${
               notificationState ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 absolute top-0 right-0 h-full w-[340px] shadow-boxShadow1 bg-light py-4 xs:w-full !z-20`}
         >
            <div className="fixed top-4 right-0 w-full">
               <div className="relative text-center">
                  <LiaTimesSolid
                     className="absolute text-[18px] font-bold top-1/2 left-4 -translate-y-1/2 cursor-pointer"
                     onClick={handleNotification}
                  />
                  <span className="text-[18px] font-medium">Notifications</span>
               </div>

               <div className="my-8 border-solid border-0 border-b-1  border-dark/10">
                  <div className="flex justify-center text-center gap-4 items-center text-[14px] mb-3">
                     <div
                        className={`relative w-1/2 cursor-pointer ${
                           !notificationType
                              ? "font-medium"
                              : "font-normal text-dark/70"
                        }`}
                        onClick={() => setNotificationType(false)}
                     >
                        <p>Tout</p>

                        {Notifications?.length !== 0 && (
                           <span
                              className={`absolute top-[1.5px] right-1/4 text-[10px] px-2 py-[1px] rounded-full ${
                                 !notificationType
                                    ? "bg-primary text-light"
                                    : "bg-dark/20 text-dark/80"
                              }`}
                           >
                              {Notifications?.length}
                           </span>
                        )}
                     </div>

                     <div
                        className={`w-1/2 cursor-pointer ${
                           notificationType
                              ? "font-medium"
                              : "font-normal text-dark/80"
                        } relative`}
                        onClick={() => setNotificationType(true)}
                     >
                        <p>Messages</p>

                        {Messages?.length !== 0 && (
                           <span
                              className={`absolute top-[1.5px] right-6 text-[10px] px-2 py-[1px] rounded-full ${
                                 notificationType
                                    ? "bg-primary text-light"
                                    : "bg-dark/20 text-dark/80"
                              }`}
                           >
                              {Messages?.length}
                           </span>
                        )}
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-solid  max-h-[83vh] mt-[88px] border-x-0 border-y-[.5px] border-dark/5 min-h-[70vh] overflow-y-auto scrollbar-thin">
               {!notificationType ? (
                  Notifications?.length <= 0 ? (
                     <NothingToDisplay text="Aucune notification" />
                  ) : (
                    Notifications && Notifications.map(
                        (
                           { id, title, content, state, time_ago, link },
                           index
                        ) => (
                           <Notification
                              key={index}
                              id={id}
                              message={title}
                              icon={<IconFromLink link={link} />}
                              state={state}
                              date={time_ago}
                              link={link}
                           />
                        )
                     )
                  )
               ) : Messages.length === 0 ? (
                  <NothingToDisplay text="Vous n'avez pas de message pour l'instant" />
               ) : (
                  Messages.map((notification, index) => (
                     <Notification
                        key={index}
                        message={notification.message}
                        image={notification.image}
                        state={notification.state}
                        date={notification.date}
                        link={notification.link}
                     />
                  ))
               )}
            </div>
         </div>

         {notificationState && (
            <ScrollBarHider
               hidden={true}
               handleSearchState={handleNotification}
               className="!z-10"
            />
         )}
      </div>
   );
};

export default Notifications;