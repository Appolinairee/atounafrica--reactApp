import { useQuery } from "react-query";
import axios from "../../services/axiosConfig";
import { useState } from "react";

export const useFetchNotifications = () => {
   const [Notifications, setNotifications] = useState([]);

   const { isLoading, isError } = useQuery(
      "notifications",

      async () => {
         const response = await axios.get(
            `notifications`,
         );

         return response;
      },
      {
         onSuccess: (response) => {
            console.log(response)
            setNotifications(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
         enabled: !Notifications
      }
   );

   return { isLoading, isError, Notifications };
};