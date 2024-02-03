import { useRef, useEffect } from "react";

const Notifications = ({handleNotification, notificationState}) => {

    useEffect(() => {
        const bodyElement = document.body;
    
        if (notificationState) {
          bodyElement.classList.add('bg-green-700');
        } else {
          bodyElement.classList.remove('bg-red-700');
        }
    
        // Nettoyage lors du démontage du composant
        return () => {
          bodyElement.classList.remove('bg-red-700');
        };
      }, [notificationState]);

  return (
    <div className={`${notificationState ? "translate-x-0": "translate-x-full"} z-50 fixed top-0 right-0 h-full w-[300px] shadow-boxShadow1`}>
       Hello
    </div>
  )
}

export default Notifications;
