import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

import NotificationImage from "../assets/photos(exemples)/OIP (4).jpeg"
import NothingToDisplay from "../BaseComponents/NothingToDisplay";

const Notification = ({message, image, state, date, link}) => {
  return(
    <div className={`${state ? "bg-dark/5 border-light": "bg-secondary/30 border-dark/5"} p-2 px-5 flex gap-3 border-solid border-0 border-b-[0.5px] cursor-pointer`}>
        <div className="w-[60px] h-[35px]">
          <img className="w-full h-full rounded-full" src={image} alt={message} />
        </div>

        <div className="font-medium">
          <p className="text-[14px]">{message}</p>
          <span className="text-[12px]">{date}</span>
        </div>
    </div>
  )
}

const Notifications = ({handleNotification, notificationState }) => {

  const [notificationType, setNotificationType] = useState(false);

  const Notifications = [
    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: true,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: false,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: true,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: false,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: true,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: false,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: true,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: false,
      date: "11 Mai 2024 à 13:49:14"
    },

    {
      message: "Vous avez un nouveau message pour votre commande!",
      link: "",
      image: NotificationImage,
      state: true,
      date: "11 Mai 2024 à 13:49:14"
    }
  ];

  const Messages = [];

  
  useEffect(() => {
    const bodyElement = document.body;

    if (notificationState) {
      bodyElement.classList.add("overflow-hidden");
    } else {
      bodyElement.classList.remove("overflow-hidden");
    }

    return () => {
      bodyElement.classList.remove("overflow-hidden");
    };
  }, [notificationState]);

  return (
    <div className={`fixed top-0 right-0 h-full w-full bg-transparent ${
      notificationState ? "z-50" : "z-0 w-0"
    }`}>
      <div
        className={`${
          notificationState ? "translate-x-0" : "translate-x-full"
        } transition-all duration-200 absolute top-0 right-0 h-full w-[340px] shadow-boxShadow1 bg-light py-4 xs:w-full`}
      >
        <div className="fixed top-4 right-0 w-full">
          <div className="relative text-center">
              <LiaTimesSolid className="absolute text-[18px] font-bold top-1/2 left-4 -translate-y-1/2 cursor-pointer" onClick={handleNotification} />
              <span className="text-[18px] font-medium">Notifications</span>
          </div>

          <div className="my-8 border-solid border-0 border-b-1  border-dark/10">
            <div className="flex justify-center text-center gap-4 items-center text-[14px] mb-3">
              <div className={`relative w-1/2 cursor-pointer ${!notificationType ? 'font-medium': "font-normal text-dark/70"}`} onClick={() => setNotificationType(false)}>
                  <p>Tout</p>

                  {
                    (Notifications.length != 0) &&

                    <span className={`absolute top-[1.5px] right-1/4 text-[10px] px-2 py-[1px] rounded-full ${!notificationType ? 'bg-primary text-light': "bg-dark/20 text-dark/80"}`}>
                    {Notifications.length}
                  </span>
                  }
                  
              </div>

              <div className={`w-1/2 cursor-pointer ${notificationType ? 'font-medium': "font-normal text-dark/80"} relative`} onClick={() => setNotificationType(true)}>
                <p>Messages</p>

                {
                    (Messages.length != 0) &&

                    <span className={`absolute top-[1.5px] right-6 text-[10px] px-2 py-[1px] rounded-full ${notificationType ? 'bg-primary text-light': "bg-dark/20 text-dark/80"}`}>
                    {Messages.length}
                  </span>
                  }
              </div>
            </div>
          </div>
        </div>

        <div className="border-solid  max-h-[83vh] mt-[88px] border-x-0 border-y-[.5px] border-dark/5 min-h-[70vh] overflow-y-auto scrollbar-thin">
              {

                (!notificationType) ?
                  Notifications.length == 0 ? 
                  <NothingToDisplay />
                  :
                  Notifications.map((notification, index) => (
                    <Notification key={index} message={notification.message} image={notification.image} state={notification.state} date={notification.date} link={notification.link} />
                  ))

                :

                Messages.length == 0 ? 
                  <NothingToDisplay text="Vous n'avez pas de message pour l'instant" />
                  :
                  Messages.map((notification, index) => (
                    <Notification key={index} message={notification.message} image={notification.image} state={notification.state} date={notification.date} link={notification.link} />
                  ))
              }
        </div>

      </div>

      {
        notificationState &&
        <div className={`absolute bg-transparent top-0 right-[340px] h-full w-full `} onClick={handleNotification}></div>
      }
    </div>
  );
};

export default Notifications;